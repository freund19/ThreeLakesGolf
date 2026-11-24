import { router } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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

export default function EventsScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={styles.backButton}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.backText}>BACK TO HOME</Text>
        </Pressable>

        <View style={styles.header}>
          <Text style={styles.eyebrow}>THREE LAKES GOLF CLUB</Text>
          <Text style={styles.title}>Events &amp; Tournaments</Text>
          <Text style={styles.description}>
            Stay up to date with upcoming events at Three Lakes.
          </Text>
        </View>

        <View style={styles.announcement}>
          <Text style={styles.announcementLabel}>2027 SEASON</Text>
          <Text style={styles.announcementTitle}>
            Tournament Schedule Coming Soon
          </Text>
          <Text style={styles.announcementText}>
            Our 2027 tournament schedule will be announced soon.
            Check back for dates, details, and registration information.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Upcoming Events</Text>

        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>Nothing scheduled yet</Text>
          <Text style={styles.emptyText}>
            Check back soon for upcoming tournaments and events.
          </Text>
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
  backButton: {
  alignSelf: 'flex-start',
  paddingVertical: 12,
  paddingRight: 18,
  position: 'relative',
  zIndex: 10,
  },
  backText: {
    color: COLORS.green,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
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
    fontSize: 30,
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
  announcement: {
    backgroundColor: COLORS.green,
    borderRadius: 17,
    padding: 21,
    marginBottom: 27,
  },
  announcementLabel: {
    color: '#D4E0D5',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  announcementTitle: {
    color: COLORS.white,
    fontSize: 21,
    fontWeight: '900',
    marginTop: 12,
  },
  announcementText: {
    color: '#E0E8E0',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 9,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 13,
  },
  emptyCard: {
    backgroundColor: COLORS.white,
    borderRadius: 13,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  emptyTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '800',
  },
  emptyText: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 19,
    marginTop: 6,
  },
});
