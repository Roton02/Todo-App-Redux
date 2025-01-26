export interface Ttask {
  id?: string;
  title: string;
  description: string;
  completed?: boolean;
  priority: "High" | "Medium" | "Low";
  duoDate: Date
  // Define your state shape here. Use 'unknown' if you're not sure the shape yet.
}

export interface IFilter {
  filter: "all"|"High" | "Medium" | "Low";
}
