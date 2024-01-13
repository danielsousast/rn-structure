import React, { useCallback, useRef } from 'react';
import { Animated } from 'react-native';

import { useToast, useToastAction } from './hook/useToast';

import { ToastContent } from './ToastContent';

const DEFAULT_DURATION = 3000;

export function Toast() {
  const toast = useToast();
  const { hideToast } = useToastAction();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const runExitingAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeAnim],
  );

  React.useEffect(() => {
    if (!toast) {
      return;
    }
    runEnteringAnimation();
    const timer = setTimeout(
      () => {
        runExitingAnimation(hideToast);
      },
      toast?.duration || DEFAULT_DURATION,
    );

    return () => {
      clearTimeout(timer);
    };
  }, [hideToast, runEnteringAnimation, runExitingAnimation, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View style={{ position: 'absolute', alignSelf: 'center', opacity: fadeAnim }}>
      <ToastContent toast={toast} />
    </Animated.View>
  );
}
