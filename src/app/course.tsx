
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
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

const scorecard = {
  black: {
    label: 'Black',
    yards: [435, 150, 338, 270, 395, 348, 150, 303, 484, 443, 319, 301, 395, 166, 267, 147, 299, 168],
  },
  white: {
    label: 'White',
    yards: [435, 134, 338, 235, 395, 326, 140, 274, 484, 443, 319, 301, 395, 140, 267, 140, 274, 135],
  },
  forward: {
    label: 'Forward',
    yards: [375, 134, 270, 235, 265, 260, 140, 274, 400, 360, 319, 301, 295, 140, 267, 140, 274, 135],
  },
};

const par = {
  men: [4, 3, 4, 4, 4, 4, 3, 4, 5, 5, 4, 4, 4, 3, 4, 3, 4, 3],
  ladies: [5, 3, 4, 4, 5, 4, 3, 4, 5, 5, 4, 4, 5, 3, 4, 4, 4, 3],
};

const handicap = {
  men: [3, 15, 7, 11, 1, 9, 17, 13, 5, 6, 8, 4, 2, 18, 12, 14, 10, 16],
  ladies: [7, 17, 1, 11, 3, 9, 15, 13, 5, 6, 8, 10, 2, 14, 4, 12, 16, 18],
};

export default function CourseScreen() {
      const [selectedTee, setSelectedTee] = useState<'black' | 'white' | 'forward'>('black');
  const [selectedCard, setSelectedCard] = useState<'men' | 'ladies'>('men');
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>‹  BACK</Text>
        </Pressable>

        <View style={styles.hero}>
          <Image
            source={require('../../assets/images/three-lakes-hero.jpg')}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroEyebrow}>THREE LAKES GOLF CLUB</Text>
            <Text style={styles.heroTitle}>The Course</Text>
            <Text style={styles.heroSubtitle}>
              A Central Washington golf experience.
            </Text>
          </View>
        </View>

        <View style={styles.intro}>
          <Text style={styles.sectionTitle}>Welcome to Three Lakes</Text>
          <Text style={styles.bodyText}>
            Located approximately four miles from Wenatchee, Three Lakes
            Golf Club offers a scenic golf experience overlooking the
            Columbia River to the east and bordered by the Cascade
            Mountains to the west.
          </Text>
          <Text style={styles.bodyText}>
            Our 18-hole public golf course is dedicated to providing
            an affordable, rewarding, high-quality golf experience
            for members and guests.
          </Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>18</Text>
            <Text style={styles.statLabel}>HOLES</Text>
          </View>
          </View>
                  <View style={styles.holeSection}>
          <Text style={styles.sectionTitle}>Course Scorecard</Text>
          <Text style={styles.bodyText}>
            Select your tees and scorecard to view hole-by-hole details.
          </Text>

          <Text style={styles.selectorLabel}>SELECT TEES</Text>
          <View style={styles.selectorRow}>
            {(['black', 'white', 'forward'] as const).map((tee) => (
              <Pressable
                key={tee}
                onPress={() => setSelectedTee(tee)}
                style={{
                  flex: 1,
                  paddingVertical: 11,
                  borderRadius: 9,
                  alignItems: 'center',
                  backgroundColor:
                    selectedTee === tee ? COLORS.green : COLORS.white,
                  borderWidth: 1,
                  borderColor: COLORS.border,
                }}
              >
                <Text
                  style={{
                    color: selectedTee === tee ? COLORS.white : COLORS.green,
                    fontSize: 12,
                    fontWeight: '800',
                  }}
                >
                  {scorecard[tee].label}
                </Text>
              </Pressable>
            ))}
          </View>

          <Text style={styles.selectorLabel}>SCORECARD</Text>
          <View style={styles.selectorRow}>
            {(['men', 'ladies'] as const).map((card) => (
              <Pressable
                key={card}
                onPress={() => setSelectedCard(card)}
                style={{
                  flex: 1,
                  paddingVertical: 11,
                  borderRadius: 9,
                  alignItems: 'center',
                  backgroundColor:
                    selectedCard === card ? COLORS.green : COLORS.white,
                  borderWidth: 1,
                  borderColor: COLORS.border,
                }}
              >
                <Text
                  style={{
                    color: selectedCard === card ? COLORS.white : COLORS.green,
                    fontSize: 12,
                    fontWeight: '800',
                  }}
                >
                  {card === 'men' ? "Men's" : "Ladies'"} 
                </Text>
              </Pressable>
            ))}
          </View>

          {[0, 9].map((start) => {
            const end = start + 9;
            const yards = scorecard[selectedTee].yards
              .slice(start, end)
              .reduce((total, value) => total + value, 0);
            const parTotal = par[selectedCard]
              .slice(start, end)
              .reduce((total, value) => total + value, 0);

            return (
              <View key={start} style={styles.scorecardCard}>
                <Text style={styles.scorecardHeading}>
                  {start === 0 ? 'FRONT NINE' : 'BACK NINE'}
                </Text>

                <View style={styles.scorecardHeader}>
                  <Text style={styles.scorecardHole}>HOLE</Text>
                  <Text style={styles.scorecardColumn}>YDS</Text>
                  <Text style={styles.scorecardColumn}>PAR</Text>
                  <Text style={styles.scorecardColumn}>HCP</Text>
                </View>

                {Array.from({ length: 9 }, (_, index) => {
                  const hole = start + index;

                  return (
                    <View key={hole} style={styles.scorecardRow}>
                      <Text style={styles.scorecardHole}>{hole + 1}</Text>
                      <Text style={styles.scorecardColumn}>
                        {scorecard[selectedTee].yards[hole]}
                      </Text>
                      <Text style={styles.scorecardColumn}>
                        {par[selectedCard][hole]}
                      </Text>
                      <Text style={styles.scorecardColumn}>
                        {handicap[selectedCard][hole]}
                      </Text>
                    </View>
                  );
                })}

                <View style={styles.scorecardTotal}>
                  <Text style={styles.scorecardHole}>
                    {start === 0 ? 'OUT' : 'IN'}
                  </Text>
                  <Text style={styles.scorecardColumn}>{yards}</Text>
                  <Text style={styles.scorecardColumn}>{parTotal}</Text>
                  <Text style={styles.scorecardColumn}>—</Text>
                </View>
              </View>
            );
          })}

                    <View style={styles.scorecardGrandTotal}>
            <View style={styles.summaryHeader}>
              <Text style={styles.summaryHeading}>TOTALS</Text>
              <Text style={styles.summaryHeading}>YARDS</Text>
              <Text style={styles.summaryHeading}>PAR</Text>
            </View>

            {[
              { label: 'OUT', start: 0 },
              { label: 'IN', start: 9 },
              { label: 'TOTAL', start: 0, total: true },
            ].map((item) => {
              const end = item.total ? 18 : item.start + 9;
              const yardage = scorecard[selectedTee].yards
                .slice(item.start, end)
                .reduce((sum, value) => sum + value, 0);
              const parValue = par[selectedCard]
                .slice(item.start, end)
                .reduce((sum, value) => sum + value, 0);

              return (
                <View
                  key={item.label}
                  style={[
                    styles.summaryRow,
                    item.total && styles.summaryTotalRow,
                  ]}
                >
                  <Text style={styles.summaryLabel}>{item.label}</Text>
                  <Text style={styles.summaryValue}>{yardage}</Text>
                  <Text style={styles.summaryValue}>{parValue}</Text>
                </View>
              );
            })}
          </View>
        </View>
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
  hero: {
    height: 225,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 25,
  },
  heroOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(20, 45, 32, 0.48)',
  },
  heroEyebrow: {
    color: '#D4E0D5',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  heroTitle: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: '900',
    marginTop: 7,
  },
  heroSubtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 5,
  },
  intro: {
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '900',
    color: COLORS.green,
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 13,
    lineHeight: 21,
    color: COLORS.muted,
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 9,
    marginBottom: 28,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statNumber: {
    color: COLORS.green,
    fontSize: 21,
    fontWeight: '900',
  },
  statLabel: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: '800',
    marginTop: 5,
    textAlign: 'center',
  },
  holeSection: {
    marginBottom: 10,
  },
    selectorLabel: {
    color: COLORS.muted,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 12,
    marginBottom: 8,
  },
  selectorRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  scorecardCard: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginTop: 12,
  },
  scorecardHeading: {
    color: COLORS.green,
    fontSize: 13,
    fontWeight: '900',
    marginBottom: 10,
  },
  scorecardHeader: {
    flexDirection: 'row',
    paddingVertical: 9,
    backgroundColor: '#E9EEE8',
    borderRadius: 6,
  },
  scorecardRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  scorecardTotal: {
    flexDirection: 'row',
    paddingVertical: 11,
    borderTopWidth: 1,
    borderTopColor: COLORS.green,
    marginTop: 3,
  },
  scorecardHole: {
    flex: 1.3,
    color: COLORS.text,
    fontSize: 12,
    fontWeight: '800',
  },
  scorecardColumn: {
    flex: 1,
    color: COLORS.text,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  scorecardGrandTotal: {
    backgroundColor: '#E9EEE8',
    borderRadius: 12,
    padding: 15,
    marginTop: 14,
  },  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  summaryHeading: {
    flex: 1,
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: '900',
    textAlign: 'center',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  summaryTotalRow: {
    borderBottomWidth: 0,
    borderTopWidth: 2,
    borderTopColor: COLORS.green,
    marginTop: 4,
  },
  summaryLabel: {
    flex: 1,
    color: COLORS.green,
    fontSize: 13,
    fontWeight: '900',
  },
  summaryValue: {
    flex: 1,
    color: COLORS.text,
    fontSize: 13,
    fontWeight: '800',
    textAlign: 'center',
  },
  scorecardGrandLabel: {
    color: COLORS.green,
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 8,
  },
  scorecardGrandValue: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '800',
    marginTop: 3,
  },
  holeCard: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginTop: 8,
  },
  holeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  holeName: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: '700',
  },
  holeYards: {
    color: COLORS.green,
    fontSize: 13,
    fontWeight: '800',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 25,
    marginTop: 20,
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
