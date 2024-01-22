export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      districts: {
        Row: {
          created_at: string | null;
          district_name: string | null;
          id: string;
          leader_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          district_name?: string | null;
          id: string;
          leader_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          district_name?: string | null;
          id?: string;
          leader_id?: string | null;
        };
        Relationships: [];
      };
      points: {
        Row: {
          created_at: string | null;
          id: string | null;
          talanton: number | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string | null;
          talanton?: number | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string | null;
          talanton?: number | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
      points_type: {
        Row: {
          created_at: string;
          id: number;
          point: number;
          point_type_name: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          point?: number;
          point_type_name?: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          point?: number;
          point_type_name?: string;
        };
        Relationships: [];
      };
      surf_product: {
        Row: {
          created_at: string;
          description: string | null;
          id: string;
          logo: string | null;
          name: string;
          status: boolean;
          url: string | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: string;
          logo?: string | null;
          name?: string;
          status?: boolean;
          url?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: string;
          logo?: string | null;
          name?: string;
          status?: boolean;
          url?: string | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          back_seat: string | null;
          created_at: string | null;
          districts_id: string | null;
          id: string;
          leader: boolean | null;
          name: string | null;
          permission: boolean | null;
          point: number;
        };
        Insert: {
          back_seat?: string | null;
          created_at?: string | null;
          districts_id?: string | null;
          id?: string;
          leader?: boolean | null;
          name?: string | null;
          permission?: boolean | null;
          point?: number;
        };
        Update: {
          back_seat?: string | null;
          created_at?: string | null;
          districts_id?: string | null;
          id?: string;
          leader?: boolean | null;
          name?: string | null;
          permission?: boolean | null;
          point?: number;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
      Database['public']['Views'])
  ? (Database['public']['Tables'] &
      Database['public']['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
  ? Database['public']['Enums'][PublicEnumNameOrOptions]
  : never;
