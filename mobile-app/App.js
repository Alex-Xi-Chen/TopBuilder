import React, { useEffect, useMemo, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { accountMessages, contractors, images, infoPages, posts, projectReferences, reviews, services } from "./src/data/mockData";
import { auth, db } from "./src/firebase";
import { colors, shadow, spacing } from "./src/theme/tokens";

const copy = {
  en: {
    language: "中文",
    tabs: { home: "Home", search: "Search", community: "Community", profile: "Profile", account: "Account" },
    back: "Back",
    home: {
      eyebrow: "Contractor marketplace",
      title: "Complete renovation guidance and support",
      copy: "Your trusted partner on the home improvement journey.",
      searchTitle: "What are you planning?",
      projectType: "Project type",
      postal: "Postal code",
      find: "Find contractors",
      services: "Popular project types",
      expertTitle: "Build with verified local experts",
      expertCopy: "Compare visible project history, homeowner reviews, and clear service coverage.",
      advisor: "Daniel Lin",
      advisorRole: "Senior renovation advisor",
      projects: "Selected project references",
      reviews: "Clear reviews before you choose",
      stories: "Real project stories",
      faqTitle: "Common questions",
      ctaTitle: "Ready to plan your next project?",
      ctaCopy: "Share your scope and compare the right local professionals."
    },
    stats: { contact: "1:1 support", pros: "verified pros", reviews: "homeowner reviews" },
    search: {
      title: "Find local professionals",
      copy: "Filter by service, compare profiles, and contact the team that fits your project.",
      all: "All services",
      sort: "Sort",
      recommended: "Recommended",
      highest: "Highest rated",
      newest: "Most reviewed",
      results: "contractors match your project",
      empty: "No contractors match this search yet."
    },
    card: { view: "View profile", contact: "Contact", save: "Save", sent: "Message sent.", saved: "Saved to favorites." },
    profile: {
      rating: "Rating",
      reviews: "Reviews",
      projects: "Projects",
      about: "About",
      faq: "FAQ",
      contact: "Contact contractor",
      save: "Save",
      overview: "Company overview",
      overviewCopy: "This team provides site review, scope planning, material guidance, and project coordination with clear milestone updates.",
      faqItems: [
        ["Do they provide estimates?", "Yes. Share your scope and preferred timeline to receive next-step guidance."],
        ["Can they help with permits?", "For larger scopes, the team can coordinate permit requirements and supporting documents."],
        ["How soon can work begin?", "Availability depends on scope, season, and inspection requirements."]
      ]
    },
    community: {
      title: "Renovation stories",
      eyebrow: "Community",
      latest: "Latest",
      featured: "Featured article",
      categories: "Categories",
      read: "Read article",
      related: "Related articles",
      previous: "Previous",
      next: "Next",
      author: "TopBuilder Editorial",
      minutes: "min read",
      views: "views"
    },
    auth: {
      welcome: "Welcome to TopBuilder",
      copy: "Save contractors, compare project ideas, and manage conversations from one mobile workspace.",
      loginTitle: "Log in to TopBuilder",
      signupTitle: "Create your TopBuilder account",
      login: "Log in",
      signup: "Sign up",
      continueGoogle: "Continue with Google",
      name: "Full name",
      email: "Email",
      password: "Password",
      working: "Working...",
      loginSuccess: "You are signed in.",
      signupSuccess: "Your account is ready.",
      resetSent: "Password reset email sent.",
      googleUnavailable: "Google sign-in needs native iOS OAuth credentials. Use email login for this build.",
      missingFields: "Please enter your email and password.",
      passwordHint: "Use at least 6 characters.",
      remember: "Remember me",
      forgot: "Forgot password?",
      switchSignup: "Don't have an account? Sign up for free",
      switchLogin: "Already have an account? Log in",
      terms: "By continuing, you agree to our privacy policy and terms of service."
    },
    account: {
      owner: "Homeowner",
      saved: "Saved",
      messages: "Messages",
      profile: "Profile",
      resources: "Resources",
      savedTitle: "Saved contractors",
      profileName: "Sandy",
      profileCity: "Toronto",
      signedInCopy: "Signed in with real TopBuilder account data.",
      logout: "Log out",
      email: "Email",
      postalCode: "Postal code",
      saveProfile: "Save profile",
      profileSaved: "Profile saved.",
      join: "Join TopBuilder",
      contact: "Contact",
      submit: "Submit",
      company: "Company name",
      city: "Service city",
      intro: "Short company introduction",
      message: "Message",
      sent: "Submitted. We will follow up soon."
    }
  },
  zh: {
    language: "EN",
    tabs: { home: "首页", search: "搜索", community: "社区", profile: "主页", account: "账户" },
    back: "返回",
    home: {
      eyebrow: "承包商平台",
      title: "提供全面的装修指导和支持",
      copy: "我们是您家装路上的得力伙伴。",
      searchTitle: "您正在计划什么项目？",
      projectType: "项目类型",
      postal: "邮政编码",
      find: "寻找承包商",
      services: "热门项目类型",
      expertTitle: "与认证本地专家一起推进项目",
      expertCopy: "比较真实项目记录、屋主评价和清晰的服务范围。",
      advisor: "Daniel Lin",
      advisorRole: "高级装修顾问",
      projects: "精选项目参考",
      reviews: "选择前先看清真实评价",
      stories: "真实装修故事",
      faqTitle: "常见问题",
      ctaTitle: "准备开始规划项目？",
      ctaCopy: "分享您的需求，我们会帮助您比较合适的本地专业团队。"
    },
    stats: { contact: "1对1支持", pros: "认证专业团队", reviews: "屋主评价" },
    search: {
      title: "寻找本地专业团队",
      copy: "按服务筛选、比较主页，并联系适合您项目的团队。",
      all: "全部服务",
      sort: "排序",
      recommended: "推荐",
      highest: "评分最高",
      newest: "评价最多",
      results: "个匹配承包商",
      empty: "暂时没有匹配的承包商。"
    },
    card: { view: "查看主页", contact: "联系", save: "收藏", sent: "消息已发送。", saved: "已加入收藏。" },
    profile: {
      rating: "评分",
      reviews: "评价",
      projects: "案例",
      about: "关于",
      faq: "问答",
      contact: "联系承包商",
      save: "收藏",
      overview: "公司介绍",
      overviewCopy: "该团队提供现场评估、范围规划、材料建议和项目协调，并在每个阶段清晰同步。",
      faqItems: [
        ["是否提供估价？", "可以。请分享项目范围和期望时间，以便获得下一步建议。"],
        ["能否协助许可？", "较大范围项目可协助协调许可要求和支持文件。"],
        ["多久可以开工？", "开工时间取决于范围、季节和检查要求。"]
      ]
    },
    community: {
      title: "装修攻略",
      eyebrow: "社区",
      latest: "最新",
      featured: "精选文章",
      categories: "分类",
      read: "阅读文章",
      related: "相关文章",
      previous: "上一页",
      next: "下一页",
      author: "TopBuilder 编辑部",
      minutes: "分钟阅读",
      views: "浏览"
    },
    auth: {
      welcome: "欢迎使用 TopBuilder",
      copy: "在一个移动工作台中收藏承包商、比较项目灵感并管理沟通。",
      loginTitle: "登录 TopBuilder",
      signupTitle: "创建 TopBuilder 账户",
      login: "登录",
      signup: "注册",
      continueGoogle: "使用 Google 继续",
      name: "姓名",
      email: "电子邮件",
      password: "密码",
      working: "处理中...",
      loginSuccess: "您已登录。",
      signupSuccess: "账户已创建。",
      resetSent: "密码重置邮件已发送。",
      googleUnavailable: "Google 登录需要原生 iOS OAuth 配置。此版本请使用邮箱登录。",
      missingFields: "请输入电子邮件和密码。",
      passwordHint: "密码至少需要 6 个字符。",
      remember: "记住我",
      forgot: "忘记密码？",
      switchSignup: "还没有账号？免费注册",
      switchLogin: "已有账号？登录",
      terms: "继续即表示您同意我们的隐私政策和服务条款。"
    },
    account: {
      owner: "屋主",
      saved: "收藏",
      messages: "消息",
      profile: "资料",
      resources: "资源",
      savedTitle: "收藏的承包商",
      profileName: "Sandy",
      profileCity: "多伦多",
      signedInCopy: "已使用真实 TopBuilder 账户数据登录。",
      logout: "退出登录",
      email: "电子邮件",
      postalCode: "邮政编码",
      saveProfile: "保存资料",
      profileSaved: "资料已保存。",
      join: "承包商入驻",
      contact: "联系我们",
      submit: "提交",
      company: "公司名称",
      city: "服务城市",
      intro: "公司简介",
      message: "留言",
      sent: "已提交，我们会尽快联系您。"
    }
  }
};

const tabs = ["home", "search", "community", "profile", "account"];
const tabIcons = {
  home: "home-outline",
  search: "search-outline",
  community: "newspaper-outline",
  profile: "hammer-outline",
  account: "person-outline"
};

function local(value, lang) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.en || "";
}

function serviceById(id) {
  return services.find((service) => service.id === id) || services[0];
}

function serviceLabel(id, lang) {
  return local(serviceById(id).label, lang);
}

function imageFor(key) {
  return images[key] || images.hero;
}

function displayAuthError(error, t) {
  const code = error?.code || "";
  if (code.includes("invalid-email")) return "Invalid email address.";
  if (code.includes("weak-password")) return t.auth.passwordHint;
  if (code.includes("email-already-in-use")) return "This email already has an account.";
  if (code.includes("invalid-credential") || code.includes("wrong-password") || code.includes("user-not-found")) return "Email or password is incorrect.";
  if (code.includes("network-request-failed")) return "Network connection failed. Please try again.";
  if (code.includes("permission-denied")) return "Account signed in, but profile storage needs Firestore rules access.";
  return error?.message || "Something went wrong.";
}

function compactUser(user, profile = {}) {
  if (!user) return null;
  return {
    uid: user.uid,
    name: profile.name || user.displayName || "",
    email: profile.email || user.email || "",
    postalCode: profile.postalCode || "",
    provider: user.providerData?.[0]?.providerId || "password"
  };
}

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <SafeAreaView style={styles.safe}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.recoveryScreen}>
            <Image source={require("./assets/logo-mark.png")} style={styles.authLogo} />
            <Text style={styles.screenTitle}>TopBuilder Home</Text>
            <Text style={styles.bodyText}>The app had trouble loading. Please reopen it or try again.</Text>
            <BrandedButton icon="refresh-outline" onPress={() => this.setState({ error: null })}>Try again</BrandedButton>
          </View>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}

function TopBuilderApp() {
  const [lang, setLang] = useState("en");
  const [activeTab, setActiveTab] = useState("home");
  const [appReady, setAppReady] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [postal, setPostal] = useState("90017");
  const [sort, setSort] = useState("recommended");
  const [selectedContractor, setSelectedContractor] = useState(contractors[0]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [communityCategory, setCommunityCategory] = useState("");
  const [communityPage, setCommunityPage] = useState(1);
  const [profileTab, setProfileTab] = useState("projects");
  const [accountMode, setAccountMode] = useState("welcome");
  const [accountTab, setAccountTab] = useState("saved");
  const [authUser, setAuthUser] = useState(null);
  const [profileData, setProfileData] = useState({});
  const [authBusy, setAuthBusy] = useState(false);
  const [toast, setToast] = useState("");

  const t = copy[lang];

  useEffect(() => {
    const timer = setTimeout(() => setAppReady(true), 120);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAuthUser(null);
        setProfileData({});
        return;
      }

      let profile = {};
      try {
        const snapshot = await getDoc(doc(db, "profiles", user.uid));
        profile = snapshot.exists() ? snapshot.data() : {};
      } catch {
        profile = {};
      }
      setProfileData(profile);
      setAuthUser(compactUser(user, profile));
    });

    return unsubscribe;
  }, []);

  function flash(message) {
    setToast(message);
    setTimeout(() => setToast(""), 1800);
  }

  function chooseService(serviceId) {
    setSelectedService(serviceId);
    setActiveTab("search");
  }

  function openContractor(contractor) {
    setSelectedContractor(contractor);
    setProfileTab("projects");
    setActiveTab("profile");
  }

  function switchTab(tab) {
    setActiveTab(tab);
    if (tab !== "community") setSelectedPost(null);
  }

  async function handleAuthSubmit({ mode, name, email, password }) {
    const cleanEmail = email.trim();
    const cleanName = name.trim();
    if (!cleanEmail || !password) {
      flash(t.auth.missingFields);
      return;
    }
    if (password.length < 6) {
      flash(t.auth.passwordHint);
      return;
    }

    setAuthBusy(true);
    try {
      const credential = mode === "signup"
        ? await createUserWithEmailAndPassword(auth, cleanEmail, password)
        : await signInWithEmailAndPassword(auth, cleanEmail, password);

      if (mode === "signup" && cleanName) {
        await updateProfile(credential.user, { displayName: cleanName });
      }

      const nextProfile = {
        name: cleanName || credential.user.displayName || cleanEmail.split("@")[0],
        email: cleanEmail,
        postalCode: profileData.postalCode || postal,
        updatedAt: serverTimestamp()
      };
      try {
        await setDoc(doc(db, "profiles", credential.user.uid), nextProfile, { merge: true });
      } catch {
        // Auth should still work if Firestore rules are not deployed yet.
      }
      setProfileData(nextProfile);
      setAuthUser(compactUser(credential.user, nextProfile));
      setAccountMode("welcome");
      setAccountTab("profile");
      flash(mode === "signup" ? t.auth.signupSuccess : t.auth.loginSuccess);
    } catch (error) {
      flash(displayAuthError(error, t));
    } finally {
      setAuthBusy(false);
    }
  }

  async function handlePasswordReset(email) {
    const cleanEmail = email.trim();
    if (!cleanEmail) {
      flash(t.auth.missingFields);
      return;
    }
    setAuthBusy(true);
    try {
      await sendPasswordResetEmail(auth, cleanEmail);
      flash(t.auth.resetSent);
    } catch (error) {
      flash(displayAuthError(error, t));
    } finally {
      setAuthBusy(false);
    }
  }

  function handleGoogleSignIn() {
    flash(t.auth.googleUnavailable);
  }

  async function handleSignOut() {
    setAuthBusy(true);
    try {
      await signOut(auth);
      setAccountTab("resources");
      flash(t.account.logout);
    } catch (error) {
      flash(displayAuthError(error, t));
    } finally {
      setAuthBusy(false);
    }
  }

  async function handleProfileSave(nextProfile) {
    if (!auth.currentUser) {
      flash(t.auth.login);
      return;
    }
    setAuthBusy(true);
    try {
      const payload = { ...nextProfile, email: auth.currentUser.email || nextProfile.email, updatedAt: serverTimestamp() };
      await setDoc(doc(db, "profiles", auth.currentUser.uid), payload, { merge: true });
      setProfileData(payload);
      setAuthUser(compactUser(auth.currentUser, payload));
      flash(t.account.profileSaved);
    } catch (error) {
      flash(displayAuthError(error, t));
    } finally {
      setAuthBusy(false);
    }
  }

  if (!appReady) {
    return <LaunchScreen />;
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <AppHeader lang={lang} setLang={setLang} />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={styles.body}>
        {activeTab === "home" ? (
          <HomeScreen lang={lang} t={t} chooseService={chooseService} setActiveTab={switchTab} openContractor={openContractor} />
        ) : null}
        {activeTab === "search" ? (
          <SearchScreen
            lang={lang}
            t={t}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            postal={postal}
            setPostal={setPostal}
            sort={sort}
            setSort={setSort}
            openContractor={openContractor}
            flash={flash}
          />
        ) : null}
        {activeTab === "community" ? (
          <CommunityScreen
            lang={lang}
            t={t}
            selectedPost={selectedPost}
            setSelectedPost={setSelectedPost}
            category={communityCategory}
            setCategory={setCommunityCategory}
            page={communityPage}
            setPage={setCommunityPage}
          />
        ) : null}
        {activeTab === "profile" ? (
          <ProfileScreen lang={lang} t={t} contractor={selectedContractor} profileTab={profileTab} setProfileTab={setProfileTab} flash={flash} />
        ) : null}
        {activeTab === "account" ? (
          <AccountScreen
            lang={lang}
            t={t}
            mode={accountMode}
            setMode={setAccountMode}
            accountTab={accountTab}
            setAccountTab={setAccountTab}
            setLang={setLang}
            openContractor={openContractor}
            flash={flash}
            authUser={authUser}
            profileData={profileData}
            authBusy={authBusy}
            onAuthSubmit={handleAuthSubmit}
            onPasswordReset={handlePasswordReset}
            onGoogleSignIn={handleGoogleSignIn}
            onSignOut={handleSignOut}
            onProfileSave={handleProfileSave}
          />
        ) : null}
      </KeyboardAvoidingView>
      <BottomTabs activeTab={activeTab} setActiveTab={switchTab} t={t} />
      {toast ? <View style={styles.toast}><Text style={styles.toastText}>{toast}</Text></View> : null}
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <AppErrorBoundary>
      <TopBuilderApp />
    </AppErrorBoundary>
  );
}

function LaunchScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.launchScreen}>
        <Image source={require("./assets/logo.png")} style={styles.launchLogo} />
        <Text style={styles.mutedText}>Loading TopBuilder Home</Text>
      </View>
    </SafeAreaView>
  );
}

function AppHeader({ lang, setLang }) {
  return (
    <View style={styles.header}>
      <View style={styles.brand}>
        <Image source={require("./assets/logo.png")} style={styles.logo} />
      </View>
      <Pressable style={styles.iconButton} onPress={() => setLang(lang === "en" ? "zh" : "en")}>
        <Ionicons name="globe-outline" size={18} color={colors.ink} />
        <Text style={styles.iconButtonText}>{copy[lang].language}</Text>
      </Pressable>
    </View>
  );
}

function BottomTabs({ activeTab, setActiveTab, t }) {
  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => (
        <Pressable key={tab} style={styles.tabItem} onPress={() => setActiveTab(tab)}>
          <Ionicons name={tabIcons[tab]} size={20} color={activeTab === tab ? colors.brandDark : colors.muted} />
          <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{t.tabs[tab]}</Text>
        </Pressable>
      ))}
    </View>
  );
}

function HomeScreen({ lang, t, chooseService, setActiveTab, openContractor }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <View style={styles.heroCard}>
        <Text style={styles.eyebrow}>{t.home.eyebrow}</Text>
        <Text style={styles.heroTitle}>{t.home.title}</Text>
        <Text style={styles.heroCopy}>{t.home.copy}</Text>
        <BrandedButton onPress={() => setActiveTab("search")} icon="search-outline">{t.home.find}</BrandedButton>
      </View>

      <Image source={images.hero} style={styles.heroImage} />

      <SectionTitle eyebrow={t.home.searchTitle} title={t.home.services} />
      <View style={styles.serviceGrid}>
        {services.map((service) => (
          <Pressable key={service.id} style={styles.serviceTile} onPress={() => chooseService(service.id)}>
            <Ionicons name={service.icon} size={24} color={colors.brandDark} />
            <Text style={styles.serviceText}>{local(service.label, lang)}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.expertBand}>
        <View style={styles.expertCopy}>
          <Text style={styles.eyebrow}>{t.home.expertTitle}</Text>
          <Text style={styles.bodyText}>{t.home.expertCopy}</Text>
          <View style={styles.statsRow}>
            <MiniStat value="1:1" label={t.stats.contact} />
            <MiniStat value="200+" label={t.stats.pros} />
            <MiniStat value="4000+" label={t.stats.reviews} />
          </View>
        </View>
        <View style={styles.advisorCard}>
          <Image source={images.advisor} style={styles.advisorImage} />
          <Text style={styles.advisorName}>{t.home.advisor}</Text>
          <Text style={styles.mutedText}>{t.home.advisorRole}</Text>
        </View>
      </View>

      <SectionTitle title={t.home.projects} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalCards}>
        {projectReferences.map((project) => (
          <ProjectCard key={project.id} project={project} lang={lang} />
        ))}
      </ScrollView>

      <SectionTitle title={t.home.reviews} />
      {reviews.map((review) => <ReviewCard key={review.name} review={review} lang={lang} />)}

      <View style={styles.photoCta}>
        <Image source={images.addition} style={styles.photoCtaImage} />
        <View style={styles.photoCtaOverlay}>
          <Text style={styles.photoCtaTitle}>{t.home.ctaTitle}</Text>
          <Text style={styles.photoCtaCopy}>{t.home.ctaCopy}</Text>
          <BrandedButton onPress={() => setActiveTab("search")} icon="search-outline">{t.home.find}</BrandedButton>
        </View>
      </View>

      <SectionTitle title={t.home.faqTitle} />
      {t.profile.faqItems.map(([question, answer]) => <FaqRow key={question} question={question} answer={answer} />)}

      <SectionTitle title={t.home.stories} />
      {contractors.slice(0, 3).map((contractor) => (
        <ContractorCard key={contractor.id} contractor={contractor} lang={lang} t={t} onView={() => openContractor(contractor)} />
      ))}
    </ScrollView>
  );
}

function SearchScreen({ lang, t, selectedService, setSelectedService, postal, setPostal, sort, setSort, openContractor, flash }) {
  const results = useMemo(() => {
    let list = contractors.filter((contractor) => !selectedService || contractor.services.includes(selectedService));
    if (sort === "highest") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "newest") list = [...list].sort((a, b) => b.reviews - a.reviews);
    return list;
  }, [selectedService, sort]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <ScreenHeading eyebrow={t.tabs.search} title={t.search.title} copyText={t.search.copy} />
      <View style={styles.fieldGroup}>
        <Ionicons name="search-outline" size={18} color={colors.muted} />
        <TextInput placeholder={t.home.projectType} placeholderTextColor={colors.muted} style={styles.fieldInput} value={selectedService ? serviceLabel(selectedService, lang) : ""} editable={false} />
      </View>
      <View style={styles.fieldGroup}>
        <Ionicons name="location-outline" size={18} color={colors.muted} />
        <TextInput placeholder={t.home.postal} placeholderTextColor={colors.muted} style={styles.fieldInput} value={postal} onChangeText={setPostal} />
      </View>
      <ChipScroller>
        <Chip active={!selectedService} onPress={() => setSelectedService("")}>{t.search.all}</Chip>
        {services.map((service) => (
          <Chip key={service.id} active={selectedService === service.id} onPress={() => setSelectedService(service.id)}>{local(service.label, lang)}</Chip>
        ))}
      </ChipScroller>
      <Text style={styles.filterLabel}>{t.search.sort}</Text>
      <View style={styles.segment}>
        {["recommended", "highest", "newest"].map((key) => (
          <Pressable key={key} style={[styles.segmentItem, sort === key && styles.segmentActive]} onPress={() => setSort(key)}>
            <Text style={[styles.segmentText, sort === key && styles.segmentTextActive]}>{t.search[key]}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.resultCount}><Text style={styles.resultNumber}>{results.length}</Text> {t.search.results}</Text>
      {results.length ? results.map((contractor) => (
        <ContractorCard key={contractor.id} contractor={contractor} lang={lang} t={t} onView={() => openContractor(contractor)} onContact={() => flash(t.card.sent)} />
      )) : <EmptyState text={t.search.empty} />}
    </ScrollView>
  );
}

function CommunityScreen({ lang, t, selectedPost, setSelectedPost, category, setCategory, page, setPage }) {
  if (selectedPost) {
    const related = posts.filter((post) => post.id !== selectedPost.id).slice(0, 3);
    return (
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Pressable style={styles.backButton} onPress={() => setSelectedPost(null)}>
          <Ionicons name="arrow-back" size={18} color={colors.ink} />
          <Text style={styles.backText}>{t.back}</Text>
        </Pressable>
        <Text style={styles.eyebrow}>{t.community.eyebrow}</Text>
        <Text style={styles.articleDetailTitle}>{local(selectedPost.title, lang)}</Text>
        <Text style={styles.articleMeta}>{t.community.author} · {selectedPost.date} · {selectedPost.minutes} {t.community.minutes} · {selectedPost.views} {t.community.views}</Text>
        <Image source={imageFor(selectedPost.image)} style={styles.articleHero} />
        <Text style={styles.articleLead}>{local(selectedPost.excerpt, lang)}</Text>
        {selectedPost.sections.map((section, index) => (
          <View key={section.heading.en} style={styles.articleSection}>
            <Text style={styles.articleSectionTitle}>{index + 1}. {local(section.heading, lang)}</Text>
            <Text style={styles.bodyText}>{local(section.body, lang)}</Text>
          </View>
        ))}
        <SectionTitle title={t.community.related} />
        {related.map((post) => <ArticleRow key={post.id} post={post} lang={lang} t={t} onPress={() => setSelectedPost(post)} />)}
      </ScrollView>
    );
  }

  const filtered = category ? posts.filter((post) => post.category === category) : posts;
  const pageSize = 3;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const featured = posts[1];

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <ScreenHeading eyebrow={t.community.eyebrow} title={t.community.title} copyText={t.search.copy} />
      <View style={styles.featuredArticle}>
        <Image source={imageFor(featured.image)} style={styles.featuredImage} />
        <View style={{ flex: 1 }}>
          <Text style={styles.eyebrow}>{t.community.featured}</Text>
          <Text style={styles.featuredTitle}>{local(featured.title, lang)}</Text>
          <Pressable onPress={() => setSelectedPost(featured)}><Text style={styles.linkText}>{t.community.read}</Text></Pressable>
        </View>
      </View>
      <Text style={styles.filterLabel}>{t.community.categories}</Text>
      <ChipScroller>
        <Chip active={!category} onPress={() => { setCategory(""); setPage(1); }}>{t.search.all}</Chip>
        {services.map((service) => (
          <Chip key={service.id} active={category === service.id} onPress={() => { setCategory(service.id); setPage(1); }}>{local(service.label, lang)}</Chip>
        ))}
      </ChipScroller>
      {visible.map((post) => <ArticleRow key={post.id} post={post} lang={lang} t={t} onPress={() => setSelectedPost(post)} />)}
      <View style={styles.pagination}>
        <Pressable style={[styles.pageButton, currentPage === 1 && styles.disabledButton]} disabled={currentPage === 1} onPress={() => setPage(currentPage - 1)}>
          <Text style={styles.pageText}>{t.community.previous}</Text>
        </Pressable>
        <Text style={styles.pageIndicator}>{currentPage} / {totalPages}</Text>
        <Pressable style={[styles.pageButton, currentPage === totalPages && styles.disabledButton]} disabled={currentPage === totalPages} onPress={() => setPage(currentPage + 1)}>
          <Text style={styles.pageText}>{t.community.next}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

function ProfileScreen({ lang, t, contractor, profileTab, setProfileTab, flash }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Image source={imageFor(contractor.image)} style={styles.profileHero} />
      <View style={styles.profilePanel}>
        <Text style={styles.eyebrow}>{contractor.city}</Text>
        <Text style={styles.profileTitle}>{contractor.name}</Text>
        <Text style={styles.bodyText}>{local(contractor.blurb, lang)}</Text>
        <View style={styles.statsRow}>
          <MiniStat value={contractor.rating.toFixed(1)} label={t.profile.rating} />
          <MiniStat value={contractor.reviews} label={t.profile.reviews} />
          <MiniStat value={contractor.projects} label={t.profile.projects} />
        </View>
        <TagRow tags={contractor.tags[lang]} />
        <View style={styles.actionRow}>
          <BrandedButton onPress={() => flash(t.card.sent)} icon="mail-outline">{t.profile.contact}</BrandedButton>
          <Pressable style={styles.saveButton} onPress={() => flash(t.card.saved)}><Ionicons name="heart-outline" size={18} color={colors.ink} /><Text style={styles.saveButtonText}>{t.profile.save}</Text></Pressable>
        </View>
      </View>
      <View style={styles.tabsPill}>
        {["projects", "reviews", "about", "faq"].map((tab) => (
          <Pressable key={tab} style={[styles.pillTab, profileTab === tab && styles.pillTabActive]} onPress={() => setProfileTab(tab)}>
            <Text style={[styles.pillTabText, profileTab === tab && styles.pillTabTextActive]}>{t.profile[tab]}</Text>
          </Pressable>
        ))}
      </View>
      <ProfilePanel lang={lang} t={t} contractor={contractor} active={profileTab} />
    </ScrollView>
  );
}

function ProfilePanel({ lang, t, contractor, active }) {
  if (active === "about") {
    return <InfoBlock title={t.profile.overview} text={t.profile.overviewCopy} />;
  }
  if (active === "faq") {
    return <View style={styles.stack}>{t.profile.faqItems.map(([q, a]) => <FaqRow key={q} question={q} answer={a} />)}</View>;
  }
  if (active === "reviews") {
    return <View style={styles.stack}>{reviews.map((review) => <ReviewCard key={review.name} review={review} lang={lang} />)}</View>;
  }
  return (
    <View style={styles.projectGrid}>
      {contractor.services.map((id) => (
        <ProjectCard key={id} project={{ id, service: id, image: serviceById(id).id === "kitchen" ? "hero" : id, city: contractor.city, budget: "$25k+", weeks: "4+" }} lang={lang} compact />
      ))}
    </View>
  );
}

function AccountScreen({
  lang,
  t,
  mode,
  setMode,
  accountTab,
  setAccountTab,
  setLang,
  openContractor,
  flash,
  authUser,
  profileData,
  authBusy,
  onAuthSubmit,
  onPasswordReset,
  onGoogleSignIn,
  onSignOut,
  onProfileSave
}) {
  if (mode === "login" || mode === "signup") {
    return (
      <AuthForm
        lang={lang}
        t={t}
        mode={mode}
        setMode={setMode}
        busy={authBusy}
        onSubmit={onAuthSubmit}
        onPasswordReset={onPasswordReset}
        onGoogleSignIn={onGoogleSignIn}
      />
    );
  }
  if (mode === "join") return <JoinForm t={t} setMode={setMode} flash={flash} />;
  if (mode === "contact") return <ContactForm t={t} setMode={setMode} flash={flash} />;
  if (infoPages.some((page) => page.id === mode)) return <InfoPage lang={lang} t={t} id={mode} setMode={setMode} />;

  const name = authUser?.name || profileData?.name || t.account.profileName;
  const email = authUser?.email || profileData?.email || "sandy@example.com";
  const city = profileData?.postalCode || t.account.profileCity;

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <View style={styles.accountHero}>
        <View style={styles.accountAvatar}><Text style={styles.accountAvatarText}>{name.slice(0, 1).toUpperCase()}</Text></View>
        <View>
          <Text style={styles.screenTitle}>{name}</Text>
          <Text style={styles.mutedText}>{authUser ? `${email} · ${city}` : `${t.account.profileCity} · ${t.account.owner}`}</Text>
          {authUser ? <Text style={styles.accountStatus}>{t.account.signedInCopy}</Text> : null}
        </View>
      </View>
      {authUser ? (
        <View style={styles.accountActions}>
          <BrandedButton onPress={onSignOut} variant="secondary" icon="log-out-outline">{authBusy ? t.auth.working : t.account.logout}</BrandedButton>
        </View>
      ) : (
        <View style={styles.accountActions}>
          <BrandedButton onPress={() => setMode("login")} icon="log-in-outline">{t.auth.login}</BrandedButton>
          <BrandedButton onPress={() => setMode("signup")} variant="secondary" icon="person-add-outline">{t.auth.signup}</BrandedButton>
        </View>
      )}
      <View style={styles.tabsPill}>
        {["saved", "messages", "profile", "resources"].map((tab) => (
          <Pressable key={tab} style={[styles.pillTab, accountTab === tab && styles.pillTabActive]} onPress={() => setAccountTab(tab)}>
            <Text style={[styles.pillTabText, accountTab === tab && styles.pillTabTextActive]}>{t.account[tab]}</Text>
          </Pressable>
        ))}
      </View>
      {accountTab === "saved" ? <SavedPanel lang={lang} t={t} openContractor={openContractor} /> : null}
      {accountTab === "messages" ? <MessagesPanel lang={lang} /> : null}
      {accountTab === "profile" ? <ProfileEditPanel t={t} authUser={authUser} profileData={profileData} busy={authBusy} onSave={onProfileSave} /> : null}
      {accountTab === "resources" ? <ResourcesPanel lang={lang} t={t} setMode={setMode} setLang={setLang} /> : null}
    </ScrollView>
  );
}

function AuthForm({ lang, t, mode, setMode, busy, onSubmit, onPasswordReset, onGoogleSignIn }) {
  const isLogin = mode === "login";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView contentContainerStyle={styles.authScreen} showsVerticalScrollIndicator={false}>
      <Pressable style={styles.backButton} onPress={() => setMode("welcome")}><Ionicons name="arrow-back" size={18} color={colors.ink} /><Text style={styles.backText}>{t.back}</Text></Pressable>
      <Image source={images.auth} style={styles.authIllustration} />
      <View style={styles.authCard}>
        <Image source={require("./assets/logo-mark.png")} style={styles.authLogo} />
        <Text style={styles.screenTitle}>{isLogin ? t.auth.loginTitle : t.auth.signupTitle}</Text>
        {!isLogin ? <TextInput placeholder={t.auth.name} placeholderTextColor={colors.muted} style={styles.authInput} value={name} onChangeText={setName} textContentType="name" /> : null}
        <TextInput placeholder={t.auth.email} placeholderTextColor={colors.muted} style={styles.authInput} value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" textContentType="emailAddress" />
        <TextInput placeholder={t.auth.password} placeholderTextColor={colors.muted} secureTextEntry style={styles.authInput} value={password} onChangeText={setPassword} textContentType={isLogin ? "password" : "newPassword"} />
        <View style={styles.authMetaRow}>
          <Text style={styles.mutedText}>{isLogin ? t.auth.remember : t.auth.terms}</Text>
          {isLogin ? <Pressable onPress={() => onPasswordReset(email)}><Text style={styles.linkText}>{t.auth.forgot}</Text></Pressable> : null}
        </View>
        <BrandedButton onPress={() => onSubmit({ mode, name, email, password })} icon={isLogin ? "log-in-outline" : "person-add-outline"}>{busy ? t.auth.working : isLogin ? t.auth.login : t.auth.signup}</BrandedButton>
        <Pressable style={styles.googleButton} onPress={onGoogleSignIn}><Text style={styles.googleG}>G</Text><Text style={styles.googleText}>{t.auth.continueGoogle}</Text></Pressable>
        <Pressable onPress={() => setMode(isLogin ? "signup" : "login")}>
          <Text style={styles.switchText}>{isLogin ? t.auth.switchSignup : t.auth.switchLogin}</Text>
        </Pressable>
        <Text style={styles.authTerms}>{lang === "en" ? "Email sign-in uses the same Firebase project as the web app." : "邮箱登录使用与网页端相同的 Firebase 项目。"}</Text>
      </View>
    </ScrollView>
  );
}

function SavedPanel({ lang, t, openContractor }) {
  return (
    <View style={styles.stack}>
      <SectionTitle title={t.account.savedTitle} />
      {contractors.slice(0, 2).map((contractor) => <ContractorCard key={contractor.id} contractor={contractor} lang={lang} t={t} onView={() => openContractor(contractor)} />)}
    </View>
  );
}

function MessagesPanel({ lang }) {
  return (
    <View style={styles.stack}>
      {accountMessages.map((message) => (
        <View key={message.from} style={styles.messageCard}>
          <View style={styles.messageAvatar}><Text style={styles.messageAvatarText}>{message.from.slice(0, 1)}</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.messageFrom}>{message.from}</Text>
            <Text style={styles.mutedText}>{message.time}</Text>
            <Text style={styles.bodyText}>{local(message.text, lang)}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

function ProfileEditPanel({ t, authUser, profileData, busy, onSave }) {
  const [name, setName] = useState(authUser?.name || profileData?.name || t.account.profileName);
  const [email, setEmail] = useState(authUser?.email || profileData?.email || "sandy@example.com");
  const [postalCode, setPostalCode] = useState(profileData?.postalCode || "M2K 1A1");

  return (
    <View style={styles.formCard}>
      <TextInput placeholder={t.auth.name} placeholderTextColor={colors.muted} value={name} onChangeText={setName} style={styles.authInput} />
      <TextInput placeholder={t.account.email} placeholderTextColor={colors.muted} value={email} onChangeText={setEmail} editable={!authUser} autoCapitalize="none" keyboardType="email-address" style={styles.authInput} />
      <TextInput placeholder={t.account.postalCode} placeholderTextColor={colors.muted} value={postalCode} onChangeText={setPostalCode} autoCapitalize="characters" style={styles.authInput} />
      <BrandedButton icon="save-outline" onPress={() => onSave({ name, email, postalCode })}>{busy ? t.auth.working : t.account.saveProfile}</BrandedButton>
    </View>
  );
}

function ResourcesPanel({ lang, t, setMode, setLang }) {
  const groups = ["For customers", "For contractors", "Company"];
  return (
    <View style={styles.stack}>
      {groups.map((group) => (
        <View key={group} style={styles.resourceGroup}>
          <Text style={styles.resourceGroupTitle}>{group}</Text>
          {infoPages.filter((page) => page.group === group).map((page) => (
            <Pressable key={page.id} style={styles.resourceLink} onPress={() => setMode(page.id)}>
              <Text style={styles.resourceText}>{local(page.title, lang)}</Text>
              <Ionicons name="chevron-forward" size={17} color={colors.muted} />
            </Pressable>
          ))}
        </View>
      ))}
      <View style={styles.resourceGroup}>
        <Text style={styles.resourceGroupTitle}>{lang === "en" ? "Actions" : "操作"}</Text>
        <Pressable style={styles.resourceLink} onPress={() => setMode("join")}><Text style={styles.resourceText}>{t.account.join}</Text><Ionicons name="chevron-forward" size={17} color={colors.muted} /></Pressable>
        <Pressable style={styles.resourceLink} onPress={() => setMode("contact")}><Text style={styles.resourceText}>{t.account.contact}</Text><Ionicons name="chevron-forward" size={17} color={colors.muted} /></Pressable>
        <Pressable style={styles.resourceLink} onPress={() => setLang(lang === "en" ? "zh" : "en")}><Text style={styles.resourceText}>{copy[lang].language}</Text><Ionicons name="globe-outline" size={17} color={colors.muted} /></Pressable>
      </View>
    </View>
  );
}

function InfoPage({ lang, t, id, setMode }) {
  const page = infoPages.find((item) => item.id === id);
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Pressable style={styles.backButton} onPress={() => setMode("welcome")}><Ionicons name="arrow-back" size={18} color={colors.ink} /><Text style={styles.backText}>{t.back}</Text></Pressable>
      <ScreenHeading eyebrow={page.group} title={local(page.title, lang)} copyText={local(page.copy, lang)} />
      {page.items[lang].map((item, index) => (
        <View key={item} style={styles.infoCard}>
          <Text style={styles.infoNumber}>{String(index + 1).padStart(2, "0")}</Text>
          <Text style={styles.bodyText}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

function JoinForm({ t, setMode, flash }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Pressable style={styles.backButton} onPress={() => setMode("welcome")}><Ionicons name="arrow-back" size={18} color={colors.ink} /><Text style={styles.backText}>{t.back}</Text></Pressable>
      <ScreenHeading eyebrow={t.tabs.account} title={t.account.join} copyText={t.home.ctaCopy} />
      <View style={styles.formCard}>
        <TextInput placeholder={t.account.company} placeholderTextColor={colors.muted} style={styles.authInput} />
        <TextInput placeholder={t.account.city} placeholderTextColor={colors.muted} style={styles.authInput} />
        <TextInput placeholder={t.account.intro} placeholderTextColor={colors.muted} style={[styles.authInput, styles.textArea]} multiline />
        <BrandedButton icon="send-outline" onPress={() => flash(t.account.sent)}>{t.account.submit}</BrandedButton>
      </View>
    </ScrollView>
  );
}

function ContactForm({ t, setMode, flash }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Pressable style={styles.backButton} onPress={() => setMode("welcome")}><Ionicons name="arrow-back" size={18} color={colors.ink} /><Text style={styles.backText}>{t.back}</Text></Pressable>
      <ScreenHeading eyebrow={t.tabs.account} title={t.account.contact} copyText={t.home.ctaCopy} />
      <View style={styles.formCard}>
        <TextInput placeholder={t.auth.name} placeholderTextColor={colors.muted} style={styles.authInput} />
        <TextInput placeholder={t.auth.email} placeholderTextColor={colors.muted} style={styles.authInput} />
        <TextInput placeholder={t.account.message} placeholderTextColor={colors.muted} style={[styles.authInput, styles.textArea]} multiline />
        <BrandedButton icon="mail-outline" onPress={() => flash(t.account.sent)}>{t.account.submit}</BrandedButton>
      </View>
    </ScrollView>
  );
}

function ContractorCard({ contractor, lang, t, onView, onContact }) {
  return (
    <View style={styles.contractorCard}>
      <Pressable onPress={onView}>
        <Image source={imageFor(contractor.image)} style={styles.contractorImage} />
      </Pressable>
      <View style={styles.contractorBody}>
        <View style={styles.contractorTop}>
          <View style={{ flex: 1 }}>
            <Text style={styles.contractorName}>{contractor.name}</Text>
            <Text style={styles.mutedText}>{local(contractor.title, lang)} · {contractor.city}</Text>
          </View>
          <Text style={styles.rating}>★ {contractor.rating.toFixed(1)}</Text>
        </View>
        <Text style={styles.bodyText}>{local(contractor.blurb, lang)}</Text>
        <TagRow tags={contractor.tags[lang]} />
        <View style={styles.actionRow}>
          <BrandedButton onPress={onView} icon="business-outline">{t.card.view}</BrandedButton>
          <Pressable style={styles.saveButton} onPress={onContact}><Ionicons name="mail-outline" size={18} color={colors.ink} /><Text style={styles.saveButtonText}>{t.card.contact}</Text></Pressable>
        </View>
      </View>
    </View>
  );
}

function ArticleRow({ post, lang, t, onPress }) {
  return (
    <Pressable style={styles.articleRow} onPress={onPress}>
      <Image source={imageFor(post.image)} style={styles.articleThumb} />
      <View style={{ flex: 1 }}>
        <Text style={styles.articleCategory}>{serviceLabel(post.category, lang)}</Text>
        <Text style={styles.articleTitle}>{local(post.title, lang)}</Text>
        <Text style={styles.articleMeta}>{post.date} · {post.minutes} {t.community.minutes}</Text>
      </View>
    </Pressable>
  );
}

function ProjectCard({ project, lang, compact }) {
  return (
    <View style={[styles.projectCard, compact && styles.projectCardCompact]}>
      <Image source={imageFor(project.image)} style={styles.projectImage} />
      <Text style={styles.projectService}>{serviceLabel(project.service, lang)}</Text>
      <Text style={styles.projectMeta}>{project.city} · {project.budget} · {project.weeks}w</Text>
    </View>
  );
}

function ReviewCard({ review, lang }) {
  return (
    <View style={styles.reviewCard}>
      <Text style={styles.stars}>★★★★★</Text>
      <Text style={styles.bodyText}>{local(review.quote, lang)}</Text>
      <Text style={styles.reviewName}>{review.name}</Text>
      <Text style={styles.mutedText}>{local(review.project, lang)}</Text>
    </View>
  );
}

function FaqRow({ question, answer }) {
  return (
    <View style={styles.faqRow}>
      <Text style={styles.faqQuestion}>{question}</Text>
      <Text style={styles.mutedText}>{answer}</Text>
    </View>
  );
}

function InfoBlock({ title, text }) {
  return (
    <View style={styles.infoCard}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.bodyText}>{text}</Text>
    </View>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <View style={styles.sectionHead}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
}

function ScreenHeading({ eyebrow, title, copyText }) {
  return (
    <View style={styles.heading}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.screenTitle}>{title}</Text>
      <Text style={styles.bodyText}>{copyText}</Text>
    </View>
  );
}

function MiniStat({ value, label }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function TagRow({ tags }) {
  return <View style={styles.tagRow}>{tags.map((tag) => <Text key={tag} style={styles.tag}>{tag}</Text>)}</View>;
}

function ChipScroller({ children }) {
  return <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>{children}</ScrollView>;
}

function Chip({ active, onPress, children }) {
  return (
    <Pressable style={[styles.chip, active && styles.chipActive]} onPress={onPress}>
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{children}</Text>
    </Pressable>
  );
}

function BrandedButton({ children, onPress, icon, variant = "primary" }) {
  return (
    <Pressable style={({ pressed }) => [styles.button, variant === "secondary" && styles.secondaryButton, pressed && styles.buttonPressed]} onPress={onPress}>
      {icon ? <Ionicons name={icon} size={18} color={colors.ink} /> : null}
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

function EmptyState({ text }) {
  return (
    <View style={styles.emptyState}>
      <Ionicons name="search-outline" size={26} color={colors.brandDark} />
      <Text style={styles.mutedText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.canvas
  },
  launchScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    padding: spacing.page,
    backgroundColor: colors.canvas
  },
  launchLogo: {
    width: 165,
    height: 40,
    resizeMode: "contain"
  },
  recoveryScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 28,
    backgroundColor: colors.canvas
  },
  header: {
    height: 68,
    paddingHorizontal: spacing.page,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.canvas
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  logo: {
    width: 142,
    height: 34,
    resizeMode: "contain"
  },
  iconButton: {
    height: 38,
    borderRadius: 19,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: colors.paper,
    ...shadow.soft
  },
  iconButtonText: {
    color: colors.ink,
    fontWeight: "800"
  },
  body: {
    flex: 1,
    backgroundColor: colors.canvas
  },
  scrollContent: {
    padding: spacing.page,
    paddingBottom: 104,
    gap: 18
  },
  heroCard: {
    backgroundColor: colors.warm,
    borderRadius: 28,
    padding: 22,
    gap: 14,
    ...shadow.offset
  },
  eyebrow: {
    color: colors.brandDark,
    fontWeight: "900",
    fontSize: 12,
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  heroTitle: {
    color: colors.ink,
    fontSize: 32,
    lineHeight: 38,
    fontWeight: "900"
  },
  heroCopy: {
    color: colors.ink,
    fontSize: 16,
    lineHeight: 23,
    fontWeight: "800"
  },
  heroImage: {
    width: "100%",
    height: 214,
    borderRadius: 24
  },
  heading: {
    gap: 8
  },
  screenTitle: {
    color: colors.ink,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "900"
  },
  bodyText: {
    color: colors.deep,
    lineHeight: 21
  },
  mutedText: {
    color: colors.muted,
    lineHeight: 20
  },
  sectionHead: {
    marginTop: 4,
    gap: 4
  },
  sectionTitle: {
    color: colors.ink,
    fontSize: 21,
    lineHeight: 26,
    fontWeight: "900"
  },
  serviceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12
  },
  serviceTile: {
    width: "48%",
    minHeight: 96,
    borderRadius: 22,
    backgroundColor: colors.paper,
    padding: 14,
    justifyContent: "space-between",
    ...shadow.soft
  },
  serviceText: {
    color: colors.ink,
    fontWeight: "900",
    lineHeight: 19
  },
  expertBand: {
    borderRadius: 26,
    backgroundColor: colors.paper,
    padding: 16,
    gap: 14,
    ...shadow.soft
  },
  expertCopy: {
    gap: 10
  },
  advisorCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: colors.faint,
    borderRadius: 24,
    padding: 12
  },
  advisorImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 4,
    borderColor: colors.paper
  },
  advisorName: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: "900"
  },
  statsRow: {
    flexDirection: "row",
    gap: 10
  },
  stat: {
    flex: 1,
    backgroundColor: colors.faint,
    borderRadius: 18,
    padding: 10
  },
  statValue: {
    color: colors.ink,
    fontWeight: "900",
    fontSize: 18
  },
  statLabel: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 3,
    fontWeight: "700"
  },
  horizontalCards: {
    gap: 12,
    paddingRight: spacing.page
  },
  projectCard: {
    width: 220,
    borderRadius: 22,
    backgroundColor: colors.paper,
    overflow: "hidden",
    ...shadow.soft
  },
  projectCardCompact: {
    width: "100%"
  },
  projectImage: {
    width: "100%",
    height: 132
  },
  projectService: {
    color: colors.ink,
    fontWeight: "900",
    paddingHorizontal: 12,
    paddingTop: 10
  },
  projectMeta: {
    color: colors.muted,
    paddingHorizontal: 12,
    paddingTop: 4,
    paddingBottom: 12,
    fontWeight: "700"
  },
  reviewCard: {
    borderRadius: 22,
    backgroundColor: colors.paper,
    padding: 14,
    gap: 8,
    ...shadow.soft
  },
  stars: {
    color: colors.brandDark,
    fontWeight: "900"
  },
  reviewName: {
    color: colors.ink,
    fontWeight: "900"
  },
  photoCta: {
    minHeight: 220,
    borderRadius: 28,
    overflow: "hidden",
    ...shadow.soft
  },
  photoCtaImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%"
  },
  photoCtaOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
    gap: 10,
    backgroundColor: "rgba(17, 24, 39, 0.32)"
  },
  photoCtaTitle: {
    color: colors.paper,
    fontSize: 23,
    lineHeight: 28,
    fontWeight: "900"
  },
  photoCtaCopy: {
    color: colors.paper,
    lineHeight: 21,
    fontWeight: "700"
  },
  faqRow: {
    borderRadius: 20,
    backgroundColor: colors.paper,
    padding: 14,
    gap: 6,
    ...shadow.soft
  },
  faqQuestion: {
    color: colors.ink,
    fontWeight: "900"
  },
  fieldGroup: {
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.paper,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 10,
    ...shadow.soft
  },
  fieldInput: {
    flex: 1,
    color: colors.ink,
    fontWeight: "700"
  },
  chips: {
    gap: 8,
    paddingRight: spacing.page
  },
  chip: {
    borderRadius: 999,
    backgroundColor: colors.paper,
    paddingHorizontal: 14,
    paddingVertical: 10
  },
  chipActive: {
    backgroundColor: colors.ink
  },
  chipText: {
    color: colors.ink,
    fontWeight: "800"
  },
  chipTextActive: {
    color: colors.paper
  },
  filterLabel: {
    color: colors.ink,
    fontWeight: "900"
  },
  segment: {
    flexDirection: "row",
    borderRadius: 999,
    backgroundColor: colors.faint,
    padding: 4
  },
  segmentItem: {
    flex: 1,
    minHeight: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999
  },
  segmentActive: {
    backgroundColor: colors.paper,
    ...shadow.soft
  },
  segmentText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "800"
  },
  segmentTextActive: {
    color: colors.ink
  },
  resultCount: {
    color: colors.muted,
    fontWeight: "800"
  },
  resultNumber: {
    color: colors.ink,
    fontWeight: "900"
  },
  contractorCard: {
    borderRadius: 26,
    backgroundColor: colors.paper,
    overflow: "hidden",
    ...shadow.soft
  },
  contractorImage: {
    width: "100%",
    height: 176
  },
  contractorBody: {
    padding: 14,
    gap: 12
  },
  contractorTop: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start"
  },
  contractorName: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: "900"
  },
  rating: {
    color: colors.brandDark,
    fontWeight: "900"
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },
  tag: {
    backgroundColor: colors.faint,
    color: colors.muted,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 12,
    fontWeight: "700"
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  button: {
    minHeight: 50,
    flex: 1,
    borderRadius: 25,
    backgroundColor: colors.brand,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    ...shadow.offset
  },
  secondaryButton: {
    backgroundColor: colors.paper,
    borderWidth: 1,
    borderColor: colors.line
  },
  buttonPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.98 }]
  },
  buttonText: {
    color: colors.ink,
    fontWeight: "900"
  },
  saveButton: {
    minHeight: 50,
    paddingHorizontal: 14,
    borderRadius: 25,
    backgroundColor: colors.paper,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    ...shadow.soft
  },
  saveButtonText: {
    color: colors.ink,
    fontWeight: "900"
  },
  featuredArticle: {
    borderRadius: 24,
    backgroundColor: colors.warm,
    padding: 12,
    flexDirection: "row",
    gap: 12,
    ...shadow.soft
  },
  featuredImage: {
    width: 108,
    height: 112,
    borderRadius: 18
  },
  featuredTitle: {
    color: colors.ink,
    fontWeight: "900",
    fontSize: 16,
    lineHeight: 21
  },
  linkText: {
    color: colors.brandDark,
    fontWeight: "900",
    marginTop: 8
  },
  articleRow: {
    borderRadius: 22,
    backgroundColor: colors.paper,
    padding: 12,
    flexDirection: "row",
    gap: 12,
    ...shadow.soft
  },
  articleThumb: {
    width: 106,
    height: 92,
    borderRadius: 18
  },
  articleCategory: {
    color: colors.brandDark,
    fontWeight: "900",
    fontSize: 12
  },
  articleTitle: {
    color: colors.ink,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "900",
    marginTop: 3
  },
  articleMeta: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 6,
    lineHeight: 18
  },
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  pageButton: {
    minHeight: 40,
    borderRadius: 20,
    paddingHorizontal: 14,
    justifyContent: "center",
    backgroundColor: colors.paper,
    ...shadow.soft
  },
  disabledButton: {
    opacity: 0.35
  },
  pageText: {
    color: colors.ink,
    fontWeight: "800"
  },
  pageIndicator: {
    color: colors.muted,
    fontWeight: "900"
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    alignSelf: "flex-start",
    paddingVertical: 8
  },
  backText: {
    color: colors.ink,
    fontWeight: "900"
  },
  articleDetailTitle: {
    color: colors.ink,
    fontSize: 27,
    lineHeight: 34,
    fontWeight: "900"
  },
  articleHero: {
    width: "100%",
    height: 230,
    borderRadius: 26
  },
  articleLead: {
    color: colors.ink,
    lineHeight: 23,
    fontWeight: "700"
  },
  articleSection: {
    gap: 8
  },
  articleSectionTitle: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: "900"
  },
  profileHero: {
    width: "100%",
    height: 235,
    borderRadius: 28
  },
  profilePanel: {
    borderRadius: 26,
    backgroundColor: colors.paper,
    padding: 16,
    gap: 13,
    ...shadow.soft
  },
  profileTitle: {
    color: colors.ink,
    fontSize: 29,
    lineHeight: 34,
    fontWeight: "900"
  },
  tabsPill: {
    flexDirection: "row",
    backgroundColor: colors.faint,
    padding: 4,
    borderRadius: 999
  },
  pillTab: {
    flex: 1,
    minHeight: 38,
    alignItems: "center",
    justifyContent: "center"
  },
  pillTabActive: {
    backgroundColor: colors.paper,
    borderRadius: 999,
    ...shadow.soft
  },
  pillTabText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "800"
  },
  pillTabTextActive: {
    color: colors.ink
  },
  stack: {
    gap: 12
  },
  projectGrid: {
    gap: 12
  },
  accountHero: {
    borderRadius: 26,
    backgroundColor: colors.warm,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    ...shadow.soft
  },
  accountAvatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.brand,
    alignItems: "center",
    justifyContent: "center"
  },
  accountAvatarText: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: "900"
  },
  accountStatus: {
    color: colors.brandDark,
    fontSize: 12,
    fontWeight: "900",
    marginTop: 4
  },
  accountActions: {
    flexDirection: "row",
    gap: 10
  },
  formCard: {
    borderRadius: 24,
    backgroundColor: colors.paper,
    padding: 14,
    gap: 12,
    ...shadow.soft
  },
  authInput: {
    minHeight: 52,
    borderRadius: 18,
    backgroundColor: colors.faint,
    paddingHorizontal: 14,
    color: colors.ink,
    fontWeight: "700"
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: "top",
    paddingTop: 12
  },
  messageCard: {
    borderRadius: 22,
    backgroundColor: colors.paper,
    padding: 14,
    flexDirection: "row",
    gap: 12,
    ...shadow.soft
  },
  messageAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.faint,
    alignItems: "center",
    justifyContent: "center"
  },
  messageAvatarText: {
    color: colors.brandDark,
    fontWeight: "900"
  },
  messageFrom: {
    color: colors.ink,
    fontWeight: "900"
  },
  resourceGroup: {
    borderRadius: 22,
    backgroundColor: colors.paper,
    padding: 12,
    ...shadow.soft
  },
  resourceGroupTitle: {
    color: colors.ink,
    fontWeight: "900",
    marginBottom: 8
  },
  resourceLink: {
    minHeight: 44,
    borderTopWidth: 1,
    borderTopColor: colors.line,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  resourceText: {
    color: colors.muted,
    fontWeight: "800"
  },
  infoCard: {
    borderRadius: 22,
    backgroundColor: colors.paper,
    padding: 14,
    gap: 8,
    ...shadow.soft
  },
  infoNumber: {
    color: colors.brandDark,
    fontSize: 20,
    fontWeight: "900"
  },
  authScreen: {
    padding: spacing.page,
    paddingBottom: 104,
    gap: 16
  },
  authIllustration: {
    width: "100%",
    height: 210,
    resizeMode: "contain"
  },
  authCard: {
    borderRadius: 28,
    backgroundColor: colors.paper,
    padding: 18,
    gap: 12,
    ...shadow.offset
  },
  authLogo: {
    width: 64,
    height: 58,
    resizeMode: "contain",
    alignSelf: "center"
  },
  authMetaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12
  },
  googleButton: {
    minHeight: 50,
    borderRadius: 25,
    backgroundColor: colors.faint,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  googleG: {
    color: "#4285f4",
    fontWeight: "900"
  },
  googleText: {
    color: colors.ink,
    fontWeight: "800"
  },
  switchText: {
    color: colors.brandDark,
    textAlign: "center",
    fontWeight: "900"
  },
  authTerms: {
    color: colors.muted,
    textAlign: "center",
    fontSize: 12,
    lineHeight: 18
  },
  emptyState: {
    minHeight: 120,
    borderRadius: 24,
    backgroundColor: colors.faint,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 18
  },
  tabBar: {
    position: "absolute",
    left: 14,
    right: 14,
    bottom: 12,
    height: 68,
    borderRadius: 34,
    flexDirection: "row",
    backgroundColor: colors.paper,
    paddingHorizontal: 6,
    ...shadow.offset
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderRadius: 28
  },
  tabText: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: "800"
  },
  tabTextActive: {
    color: colors.brandDark
  },
  toast: {
    position: "absolute",
    left: spacing.page,
    right: spacing.page,
    bottom: 92,
    minHeight: 46,
    borderRadius: 23,
    backgroundColor: colors.ink,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14
  },
  toastText: {
    color: colors.paper,
    fontWeight: "900"
  }
});
