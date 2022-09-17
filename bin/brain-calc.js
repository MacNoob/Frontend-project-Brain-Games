#!/usr/bin/env node
import { greeting, acquaintance, getName } from '../src/index.js';
import calcGameConditions from '../games/calc/calc.js';

acquaintance();
getName();
greeting();
calcGameConditions();
