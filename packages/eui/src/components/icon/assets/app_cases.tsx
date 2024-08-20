/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

// THIS IS A GENERATED FILE. DO NOT MODIFY MANUALLY. @see scripts/compile-icons.js

import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const EuiIconAppCases = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4 6h22v7h-2V8H6v19H4V6Z" className="euiIcon__fillSecondary" />
    <path
      d="M10 12H7v-2h3v2Zm1 0h12v-2H11v2Z"
      className="euiIcon__fillSecondary"
    />
    <path d="M24 1H0v26h1l-1 .001v.026a2.256 2.256 0 0 0 .01.185 4.318 4.318 0 0 0 .563 1.792C1.194 30.064 2.399 31 4.5 31H17v-2H8.429a4.32 4.32 0 0 0 .57-1.927v-.062L9 27.005v-.003S9 27 8 27h1V16h21v3h2v-5H7v12.995l-.003.05a2.32 2.32 0 0 1-.298.95C6.442 28.436 5.898 29 4.5 29c-1.398 0-1.942-.564-2.199-1.004a2.32 2.32 0 0 1-.3-1.001L2 26.992V3h20v3h2V1Z" />
    <path d="M23 21v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2Z" />
    <path
      fillRule="evenodd"
      d="M24 32a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
  </svg>
);
export const icon = EuiIconAppCases;
