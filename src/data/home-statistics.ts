export const homeStatisticsConfig = {
  onlineSince: '2026-02-16',
  heatmapWindowDays: 365,
  heatmapCellSize: 12,
  heatmapCellGap: 4
} as const

export const { onlineSince, heatmapWindowDays, heatmapCellSize, heatmapCellGap } =
  homeStatisticsConfig
