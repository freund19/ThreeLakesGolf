
import { Image } from 'expo-image';
import { useState } from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
  green: '#294638',
  darkGreen: '#1D342A',
  sage: '#718C78',
  cream: '#F5F3EC',
  white: '#FFFFFF',
  text: '#25372D',
  muted: '#69766D',
  border: '#E3E5DD',
};

function SectionTitle({ title, action }: { title: string; action?: string }) {
  return (
    <View style={styles.sectionHeading}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {action ? <Text style={styles.sectionAction}>{action}</Text> : null}
    </View>
  );
}

function QuickLink({
  title,
  subtitle,
  symbol,
  onPress,
}: {
  title: string;
  subtitle: string;
  symbol: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.quickLink} onPress={onPress}>
      <View style={styles.quickIcon}>
        <Text style={styles.quickSymbol}>{symbol}</Text>
      </View>
      <Text style={styles.quickTitle}>{title}</Text>
      <Text style={styles.quickSubtitle}>{subtitle}</Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  const [expanded, setExpanded] = useState(false);

  const openWebsite = () => {
    Linking.openURL('https://www.threelakesgolf.com/');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" />
      
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
<View style={styles.header}>
  <Image
source={require('../../../assets/images/three-lakes-logo.jpg')}
    style={styles.logo}
    resizeMode="contain"
  />
  <Pressable
    style={styles.headerButton}
    onPress={() => setExpanded(!expanded)}
  >
    <Text style={styles.headerButtonText}>i</Text>
  </Pressable>
</View>

        {/* Hero */}
<View style={styles.hero}>
  <Image
    source={require('../../../assets/images/three-lakes-hero.jpg')} 
    style={StyleSheet.absoluteFill}
    contentFit="cover"
  />
  <View style={styles.heroOverlay}>
    <Text style={styles.heroEyebrow}>WELCOME TO</Text>
    <Text style={styles.heroTitle}>Three Lakes</Text>
    <Text style={styles.heroDescription}>
      Your home for golf, events, and everything happening at the course.
    </Text>
  </View>
</View>

        {/* Course Status */}
        <View style={styles.statusCard}>
          <View style={styles.statusTop}>
            <View style={styles.statusDot} />
            <Text style={styles.statusLabel}>COURSE STATUS</Text>
            <View style={styles.closedBadge}>
              <Text style={styles.closedText}>CLOSED FOR SEASON</Text>
            </View>
          </View>
          <Text style={styles.statusTitle}>See you in the spring.</Text>
          <Text style={styles.statusDescription}>
            Our regular golf season runs March 15 through November 15.
            Reopening is weather dependent.
          </Text>
        </View>

        {/* Tee Times */}
        <Pressable style={styles.bookingButton} onPress={openWebsite}>
          <View>
            <Text style={styles.bookingEyebrow}>PLAN YOUR NEXT ROUND</Text>
            <Text style={styles.bookingTitle}>BOOK TEE TIMES</Text>
          </View>
          <Text style={styles.bookingArrow}>→</Text>
        </Pressable>

        {/* Quick Links */}
        <SectionTitle title="Explore Three Lakes" />
        <View style={styles.quickGrid}>
          <QuickLink
            title="The Course"
            subtitle="Explore the course"
            symbol="⌖"
            onPress={openWebsite}
          />
          <QuickLink
            title="Rates"
            subtitle="Golf and cart rates"
            symbol="$"
            onPress={openWebsite}
          />
          <QuickLink
            title="Lessons"
            subtitle="Player development"
            symbol="↗"
            onPress={openWebsite}
          />
          <QuickLink
                        title="Food & Beverage"
            subtitle="Food and beverage services"
            symbol="DIN"
            onPress={openWebsite}
          />
        </View>

        {/* Announcements */}
        <SectionTitle title="Course Announcements" />
        <View style={styles.announcementCard}>
          <View style={styles.announcementTag}>
            <Text style={styles.announcementTagText}>COURSE UPDATE</Text>
          </View>
          <Text style={styles.announcementTitle}>Thank you for a great season!</Text>
          <Text style={styles.announcementDescription}>
            Three Lakes is closed for the season. Watch this space for winter
            updates and reopening announcements.
          </Text>
        </View>

        {/* Events */}
        <SectionTitle title="Upcoming Events" action="VIEW ALL" />
        <Pressable style={styles.eventCard} onPress={openWebsite}>
          <View style={styles.eventIcon}>
            <Text style={styles.eventIconText}>CAL</Text>
          </View>
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>Tournament & Event Calendar</Text>
            <Text style={styles.eventDescription}>
              Check the website for upcoming events and tournament information.
            </Text>
          </View>
          <Text style={styles.eventArrow}>›</Text>
        </Pressable>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerBrand}>THREE LAKES GOLF CLUB</Text>
          <Text style={styles.footerText}>
            Golf • Community • Good Times
          </Text>
          <Pressable onPress={openWebsite}>
            <Text style={styles.footerLink}>Visit our website →</Text>
          </Pressable>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
  width: 190,
  height: 85,
},
  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  headerButtonText: {
    color: COLORS.green,
    fontSize: 19,
    fontWeight: '700',
  },
  hero: {
    minHeight: 205,
    borderRadius: 18,
    backgroundColor: COLORS.green,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    marginBottom: 18,
  },
  heroOverlay: {
  flex: 1,
  minHeight: 205,
  padding: 22,
  justifyContent: 'flex-end',
  backgroundColor: 'rgba(20, 45, 32, 0.48)',
},
  heroEyebrow: {
    color: '#D4E0D5',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
  },
  heroTitle: {
    color: COLORS.white,
    fontSize: 34,
    fontWeight: '800',
    marginTop: 7,
  },
  heroDescription: {
    color: '#E0E8E0',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 7,
    maxWidth: 270,
  },
  statusCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statusTop: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#B77B43',
  },
  statusLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: COLORS.muted,
  },
  closedBadge: {
    backgroundColor: '#F4E9DD',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 'auto',
  },
  closedText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#80532D',
  },
  statusTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: COLORS.text,
    marginTop: 15,
  },
  statusDescription: {
    fontSize: 13,
    color: COLORS.muted,
    lineHeight: 20,
    marginTop: 6,
  },
  bookingButton: {
    backgroundColor: COLORS.green,
    borderRadius: 13,
    padding: 19,
    marginBottom: 27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 78,
  },
  bookingEyebrow: {
    color: '#C9D8CD',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  bookingTitle: {
    color: COLORS.white,
    fontSize: 19,
    fontWeight: '900',
    marginTop: 5,
    letterSpacing: 0.5,
  },
  bookingArrow: {
    color: COLORS.white,
    fontSize: 29,
  },
  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 13,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: COLORS.text,
  },
  sectionAction: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    color: COLORS.sage,
  },
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 11,
    marginBottom: 27,
  },
  quickLink: {
    width: '48%',
    flexGrow: 1,
    backgroundColor: COLORS.white,
    borderRadius: 13,
    padding: 15,
    minHeight: 130,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  quickIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#E9EEE8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  quickSymbol: {
    color: COLORS.green,
    fontSize: 20,
    fontWeight: '700',
  },
  quickTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.text,
  },
  quickSubtitle: {
    fontSize: 11,
    color: COLORS.muted,
    marginTop: 5,
  },
  announcementCard: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: 17,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 27,
  },
  announcementTag: {
    backgroundColor: '#E9EEE8',
    alignSelf: 'flex-start',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 4,
    marginBottom: 11,
  },
  announcementTagText: {
    color: COLORS.green,
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.text,
  },
  announcementDescription: {
    fontSize: 12,
    color: COLORS.muted,
    lineHeight: 19,
    marginTop: 7,
  },
  eventCard: {
    backgroundColor: COLORS.white,
    borderRadius: 13,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 25,
    minHeight: 80,
  },
  eventIcon: {
    width: 43,
    height: 43,
    borderRadius: 10,
    backgroundColor: '#E9EEE8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventIconText: {
    fontSize: 10,
    fontWeight: '900',
    color: COLORS.green,
  },
  eventDetails: {
    flex: 1,
    marginLeft: 12,
  },
  eventTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.text,
  },
  eventDescription: {
    fontSize: 11,
    lineHeight: 17,
    color: COLORS.muted,
    marginTop: 4,
  },
  eventArrow: {
    fontSize: 24,
    color: COLORS.sage,
    marginLeft: 8,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  footerBrand: {
    color: COLORS.green,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
  },
  footerText: {
    fontSize: 11,
    color: COLORS.muted,
    marginTop: 7,
  },
  footerLink: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.sage,
    marginTop: 12,
  },
});
