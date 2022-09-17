#!/usr/bin/env node
import {
  acquaintance, getName, greeting,
} from '../src/index.js';

import { evenGameConditions, gameLogic } from '../games/even/even.js';

acquaintance();
getName();
greeting();
evenGameConditions();
gameLogic();
