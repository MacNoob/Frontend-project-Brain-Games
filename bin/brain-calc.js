#!/usr/bin/env node
import { description, getTask } from '../src/games/calc.js';
import processTheTask from '../src/index.js';

processTheTask(description, getTask);
