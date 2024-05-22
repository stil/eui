/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { createContext } from 'react';

// If 'window' field is undefined, fallback to global window object at runtime.
// This is compatible with jsdom tests.
export interface EuiWindowContextValue {
  window?: Window;
}

export const EuiWindowContext = createContext<EuiWindowContextValue>({
  window: undefined,
});
