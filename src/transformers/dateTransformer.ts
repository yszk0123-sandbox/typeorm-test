export const dateTransformer = {
  from(value: Date): string {
    console.log('from', value);
    return value.toISOString();
  },
  to(value?: string): Date {
    console.log('to', value);
    return value === undefined ? new Date() : new Date(value);
  }
};
