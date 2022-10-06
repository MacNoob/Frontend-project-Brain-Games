#!/usr/bin/env node
import { description, getTask } from '../src/games/even.js';
import processTheTask from '../src/index.js';

processTheTask(description, getTask);
