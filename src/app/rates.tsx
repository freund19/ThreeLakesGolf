
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

function RateRow({
  label,
  price,
}: {
  label: string;
  price: string;
}) {
  return (
    <View style={styles.rateRow}>
      <Text style={styles.rateLabel}>{label}</Text>
      <Text style={styles.ratePrice}>{price}</Text>
    </View>
  );
}

function RateCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {children}
    </View>
  );
}

export default function RatesScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>‹  BACK</Text>
        </Pressable>

        <Text style={styles.eyebrow}>THREE LAKES GOLF CLUB</Text>
        <Text style={styles.title}>Golf Rates</Text>
        <Text style={styles.description}>
          Plan your next round at Three Lakes.
        </Text>

        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>2027 ANTICIPATED RATES</Text>
          <Text style={styles.noticeText}>
            These are anticipated prices and are subject to change. All prices are before tax.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Daily Green Fees</Text>

        <RateCard title="Weekday (Monday–Thursday)">
            <RateRow label="Morning (before 12 PM)" price="$59" />
          <RateRow label="Midday (12 PM – 3 PM)" price="$49" />
          <RateRow label="Twilight (after 3 PM)" price="$39" />
        </RateCard>

        <RateCard title="Weekend (Friday–Sunday)">
            <RateRow label="Morning (before 12 PM)" price="$66" />
          <RateRow label="Midday (12 PM – 3 PM)" price="$53" />
          <RateRow label="Twilight (after 3 PM)" price="$39" />
        </RateCard>

        <Text style={styles.sectionTitle}>Additional Golf Rates</Text>

                <RateCard title="VIP Rates">
          <RateRow label="VIP Card" price="$199" />
          <RateRow label="VIP Round (cart included)" price="$51" />
        </RateCard>

        <Text style={styles.sectionTitle}>1/2 Cart</Text>

        <RateCard title="Cart Rental">
          <RateRow label="1/2 Cart" price="$18" />
        </RateCard>

        <Text style={styles.sectionTitle}>Season Passes</Text>

        <RateCard title="2027 Season Passes">
          <RateRow label="Young Adult" price="$1,800" />
          <RateRow label="Single Pass" price="$2,400" />
          <RateRow label="Couples Pass" price="$3,400" />
          <RateRow label="Corporate Pass" price="$7,000" />
        </RateCard>

        <Text style={styles.sectionTitle}>Driving Range</Text>

        <RateCard title="Range Pricing">
          <RateRow label="Large Bucket" price="$15" />
          <RateRow label="Small Bucket" price="$10" />
          <RateRow label="Range Pass" price="$500" />
        </RateCard>

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>THREE LAKES GOLF CLUB</Text>
          <Text style={styles.footerText}>
            Golf • Community • Good Times
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
  },
  backText: {
    color: COLORS.green,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
  },
  eyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    color: COLORS.sage,
    marginTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.green,
    marginTop: 7,
  },
  description: {
    fontSize: 14,
    color: COLORS.muted,
    marginTop: 7,
    marginBottom: 20,
  },
  notice: {
    backgroundColor: '#F2E8D9',
    borderRadius: 12,
    padding: 15,
    marginBottom: 25,
  },
  noticeTitle: {
    color: '#80532D',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },
  noticeText: {
    color: '#80532D',
    fontSize: 12,
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.text,
    marginBottom: 12,
    marginTop: 8,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingHorizontal: 17,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 20,
  },
  cardTitle: {
    color: COLORS.green,
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 8,
  },
  rateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 11,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  rateLabel: {
    color: COLORS.text,
    fontSize: 14,
  },
  ratePrice: {
    color: COLORS.green,
    fontSize: 15,
    fontWeight: '900',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 25,
    marginTop: 8,
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
