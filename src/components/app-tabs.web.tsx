
import {
  TabList,
  TabListProps,
  Tabs,
  TabSlot,
  TabTrigger,
  TabTriggerSlotProps,
} from 'expo-router/ui';
import { Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';

import { MaxContentWidth, Spacing } from '@/constants/theme';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>

          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton>Explore</TabButton>
          </TabTrigger>

          <TabTrigger name="events" href="/events" asChild>
            <TabButton>Events</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  const { ref, ...pressableProps } = props;
  void ref;

  return (
    <Pressable {...pressableProps} style={({ pressed }) => pressed && styles.pressed}>
      <ThemedView
        type={isFocused ? 'backgroundSelected' : 'backgroundElement'}
        style={styles.tabButtonView}>
        <ThemedText type="small" themeColor={isFocused ? 'text' : 'textSecondary'}>
          {children}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View
      {...props}
      pointerEvents="box-none"
      style={[
        styles.tabListContainer,
        isMobile && styles.mobileTabListContainer,
      ]}
    >
      <ThemedView
        type="backgroundElement"
        style={[
          styles.innerContainer,
          isMobile && styles.mobileInnerContainer,
        ]}
      >
        {!isMobile && (
          <ThemedText type="smallBold" style={styles.brandText}>
            THREE LAKES GOLF CLUB
          </ThemedText>
        )}

        {props.children}
      </ThemedView>
    </View>
  );
}
const styles = StyleSheet.create({
  tabListContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: Spacing.three,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
    mobileTabListContainer: {
    position: 'fixed',
    top: undefined,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    padding: 0,
    alignItems: 'flex-end',
    zIndex: 100,
  },
  innerContainer: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.five,
    borderRadius: Spacing.five,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    gap: Spacing.two,
    maxWidth: MaxContentWidth,
  },
  mobileInnerContainer: {
    width: '100%',
    maxWidth: '100%',
        flexGrow: 0,
    borderRadius: 0,
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.two,
    justifyContent: 'space-around',
    gap: 0,
  },
  brandText: {
    marginRight: 'auto',
  },
  pressed: {
    opacity: 0.7,
  },
  tabButtonView: {
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.three,
  },
});
