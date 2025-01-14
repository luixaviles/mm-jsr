import { Extension } from '@/extensions/types';
import { mapChanged } from '@/helpers/mapChanged';

/**
 * Extension responsible for limiting values so they never exceed neighbour values.
 */
export const extensionNeighbourLimit: Extension = (config, state, changelog) => {
  const { values } = state;

  const limitedValues = mapChanged(values, changelog.changedValues, (value, index, processedValues) => (
    value
      .clampReal(
        processedValues[index - 1]?.asReal() ?? -Infinity,
        processedValues[index + 1]?.asReal() ?? +Infinity,
      )
      .clampReal(config.min, config.max)
  ));

  return state.updateValues(limitedValues);
};