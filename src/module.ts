import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder.addNumberInput({
    path: 'searchLimit',
    name: 'Search limit',
    description: 'Limiting number of results to this value',
    defaultValue: 25,
  });
});
