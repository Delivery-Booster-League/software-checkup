import { Checklist } from '../../bean/checklist';

import { default as applicationArchitecture } from './application-architecture.json';
import { default as ciCd } from './ci-cd.json';
import { default as codeReview } from './code-review.json';
import { default as definitionOfDone } from './definition-of-done.json';
import { default as methodology } from './methodology.json';

export const CHECKLISTS: Checklist[] = [applicationArchitecture, ciCd, codeReview, definitionOfDone, methodology];