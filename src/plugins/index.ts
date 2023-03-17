import {
  AnalyzeResultItem,
  AnalyzeResults,
} from "../shared/models/analyze.model";
import { BasePlugin } from "./analyze-plugin";

export function getPluginsResult(plugins: BasePlugin[]) {
  const pluginResults: AnalyzeResults = [];
  plugins.forEach((plugin) => {
    if (plugin.plugin?.onFinishProcessing) {
      const result = plugin.plugin.onFinishProcessing();
      const pluginResult: AnalyzeResultItem = {
        result,
        plugin,
      };
      pluginResults.push(pluginResult);
    }
  });
  return pluginResults;
}