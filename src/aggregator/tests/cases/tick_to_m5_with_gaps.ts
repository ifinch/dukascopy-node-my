import { AggregateInput } from '../../types';

const input: AggregateInput = {
  data: require('./../sample_tick_data_with_gaps.json'),
  fromTimeframe: 'tick',
  toTimeframe: 'm5',
  priceType: 'bid',
  startTs: 1653634800000,
  volumes: true,
  ignoreFlats: true
};

const expectedOutput = [
  [],
  [],
  [1653635400000, 7188.569, 7197.999, 7187.599, 7189.999, 0.031],
  [1653635700000, 7188.629, 7189.999, 7184.539, 7185.629, 0.022],
  [1653636000000, 7186.689, 7187.999, 7184.539, 7185.539, 0.022],
  [1653636300000, 7186.539, 7187.629, 7184.569, 7185.659, 0.018],
  [1653636600000, 7184.569, 7188.999, 7184.569, 7186.599, 0.0145],
  [1653636900000, 7187.599, 7187.659, 7185.599, 7187.569, 0.0115],
  [1653637200000, 7186.539, 7188.999, 7185.539, 7186.569, 0.0225],
  [1653637500000, 7185.599, 7187.999, 7184.539, 7185.689, 0.0115],
  [1653637800000, 7184.999, 7195.659, 7184.569, 7192.569, 0.0135],
  [1653638100000, 7193.569, 7196.629, 7193.569, 7195.659, 0.0235]
];

export { input, expectedOutput };