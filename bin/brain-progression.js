#!/usr/bin/env node
import { description, getTask } from '../src/games/progression.js';
import run from '../src/index.js';

run(description, getTask);
