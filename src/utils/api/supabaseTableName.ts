export const supabaseTableName = (tableName: string) =>
  `${process.env.NEXT_PUBLIC_PROJECT_START_DATE}_${process.env.NEXT_PUBLIC_PROJECT_NAME}_${tableName}`;
