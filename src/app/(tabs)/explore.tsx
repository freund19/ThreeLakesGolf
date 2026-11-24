import { router } from 'expo-router';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
  green: '#294638',
  cream: '#F5F3EC',
  white: '#FFFFFF',
  text: '#25372D',
  muted: '#69766D',
  sage: '#718C78',
  border: '#E3E5DD',
};

const WEBSITE = 'https://www.threelakesgolf.com/';

const sections = [
  {
    title: 'The Course',
    subtitle: 'Explore Three Lakes Golf Club',
    symbol: '⌖',
  },
  {
    title: 'Golf Rates',
    subtitle: 'Green fees, carts, and season passes',
    symbol: '$',
  },
  {
    title: 'Lessons & Player Development',
    subtitle: 'Improve your game',
    symbol: '↗',
  },
  {
    title: 'Pro Shop',
    subtitle: 'Golf equipment and merchandise',
    symbol: '▣',
  },
    {
    title: 'Food & Beverage',
    subtitle: 'Food and beverage services at Three Lakes',
    symbol: 'DIN',
  },
  {
    title: 'Events & Tournaments',
    subtitle: 'See what is happening at the course',
    symbol: 'CAL',
  },
  {
    title: 'Contact & Directions',
    subtitle: 'Find us and get in touch',
    symbol: '→',
  },
];

export default function ExploreScreen() {
  const openWebsite = () => {
    Linking.openURL(WEBSITE);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.eyebrow}>THREE LAKES GOLF CLUB</Text>
          <Text style={styles.title}>Explore</Text>
          <Text style={styles.description}>
            Everything you need to know about the course, facilities, and experiences at Three Lakes.
          </Text>
        </View>

       <View style={styles.featureCard}>
  <Text style={styles.featureEyebrow}>WELCOME TO THREE LAKES</Text>
  <Text style={styles.featureTitle}>More than just golf.</Text>
  <Text style={styles.featureDescription}>
        Explore the course, discover everything Three Lakes
    has to offer, and find your next golf event.
  </Text>
  <Pressable style={styles.featureButton} onPress={openWebsite}>
    <Text style={styles.featureButtonText}>
      VISIT OUR WEBSITE →
    </Text>
  </Pressable>
</View>

        <Text style={styles.sectionTitle}>Discover Three Lakes</Text>

        <View style={styles.linkList}>
          {sections.map((item) => (
  <Pressable
    key={item.title}
    style={({ pressed }) => [
      styles.linkCard,
      pressed && styles.pressed,
    ]}
           onPress={() => {
      if (item.title === 'Golf Rates') {
        router.push('/rates');
      } else if (item.title === 'The Course') {
        router.push('/course');
      } else if (item.title === 'Events & Tournaments') {
        router.push('/events');
      } else {
        openWebsite();
      }
    }}
  >
    <View style={styles.iconBox}>
      <Text style={styles.iconText}>{item.symbol}</Text>
    </View>

    <View style={styles.linkDetails}>
      <Text style={styles.linkTitle}>{item.title}</Text>
      <Text style={styles.linkSubtitle}>{item.subtitle}</Text>
    </View>
    <Text style={styles.arrow}>›</Text>
  </Pressable>
))}
</View>
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>THREE LAKES GOLF CLUB</Text>
          <Text style={styles.footerText}>Golf • Community • Good Times</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 36,
  },
  header: {
    paddingTop: 22,
    paddingBottom: 22,
  },
  eyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    color: COLORS.sage,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.green,
    marginTop: 7,
  },
  description: {
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.muted,
    marginTop: 7,
  },
  featureCard: {
    backgroundColor: COLORS.green,
    borderRadius: 17,
    padding: 21,
    marginBottom: 27,
  },
  featureEyebrow: {
    color: '#D4E0D5',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  featureTitle: {
    color: COLORS.white,
    fontSize: 23,
    fontWeight: '900',
    marginTop: 10,
  },
  featureDescription: {
    color: '#E0E8E0',
    fontSize: 12,
    lineHeight: 19,
    marginTop: 7,
  },
  featureButton: {
    backgroundColor: COLORS.cream,
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 8,
    marginTop: 17,
  },
  featureButtonText: {
    color: COLORS.green,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 13,
  },
  linkList: {
    gap: 10,
  },
  linkCard: {
    backgroundColor: COLORS.white,
    borderRadius: 13,
    padding: 13,
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  pressed: {
    opacity: 0.7,
  },
  iconBox: {
    width: 43,
    height: 43,
    borderRadius: 11,
    backgroundColor: '#E9EEE8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: COLORS.green,
    fontSize: 18,
    fontWeight: '800',
  },
  linkDetails: {
    flex: 1,
    marginLeft: 13,
  },
  linkTitle: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: '800',
  },
  linkSubtitle: {
    color: COLORS.muted,
    fontSize: 11,
    marginTop: 5,
  },
  arrow: {
    color: COLORS.sage,
    fontSize: 25,
    marginLeft: 8,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 27,
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  footerTitle: {
    color: COLORS.green,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  footerText: {
    color: COLORS.muted,
    fontSize: 11,
    marginTop: 7,
  },
});
