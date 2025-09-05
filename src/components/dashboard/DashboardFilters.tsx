import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Filter, Search, X } from "lucide-react";
import { useState } from "react";

interface FilterState {
  dateRange: { from: Date | null; to: Date | null };
  program: string;
  status: string;
  location: string;
  searchTerm: string;
}

interface DashboardFiltersProps {
  onFiltersChange: (filters: FilterState) => void;
}

export function DashboardFilters({ onFiltersChange }: DashboardFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    dateRange: { from: null, to: null },
    program: "",
    status: "",
    location: "",
    searchTerm: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const updateFilter = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters: FilterState = {
      dateRange: { from: null, to: null },
      program: "",
      status: "",
      location: "",
      searchTerm: ""
    };
    setFilters(emptyFilters);
    onFiltersChange(emptyFilters);
  };

  const activeFiltersCount = Object.values(filters).filter(value => {
    if (typeof value === 'string') return value !== '';
    if (typeof value === 'object' && value !== null) {
      return value.from !== null || value.to !== null;
    }
    return false;
  }).length;

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Data Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="bg-gradient-brand text-primary-foreground">
                {activeFiltersCount}
              </Badge>
            )}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Collapse' : 'Expand'}
            </Button>
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
              >
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Search Bar - Always visible */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search programs, events, reports..."
            value={filters.searchTerm}
            onChange={(e) => updateFilter('searchTerm', e.target.value)}
            className="pl-9 bg-background/50"
          />
        </div>

        {/* Expandable Filters */}
        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t border-border/50">
            {/* Date Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Date Range</label>
              <div className="flex gap-2">
                <DatePicker
                  selected={filters.dateRange.from}
                  onSelect={(date) => updateFilter('dateRange', { ...filters.dateRange, from: date })}
                  placeholderText="From"
                />
                <DatePicker
                  selected={filters.dateRange.to}
                  onSelect={(date) => updateFilter('dateRange', { ...filters.dateRange, to: date })}
                  placeholderText="To"
                />
              </div>
            </div>

            {/* Program Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Program</label>
              <Select value={filters.program} onValueChange={(value) => updateFilter('program', value)}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="All Programs" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Programs</SelectItem>
                  <SelectItem value="education">Education Support</SelectItem>
                  <SelectItem value="healthcare">Healthcare Access</SelectItem>
                  <SelectItem value="community">Community Development</SelectItem>
                  <SelectItem value="emergency">Emergency Relief</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select value={filters.status} onValueChange={(value) => updateFilter('status', value)}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Select value={filters.location} onValueChange={(value) => updateFilter('location', value)}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Locations</SelectItem>
                  <SelectItem value="nairobi">Nairobi</SelectItem>
                  <SelectItem value="mombasa">Mombasa</SelectItem>
                  <SelectItem value="kisumu">Kisumu</SelectItem>
                  <SelectItem value="nakuru">Nakuru</SelectItem>
                  <SelectItem value="eldoret">Eldoret</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
            {filters.program && (
              <Badge variant="outline" className="flex items-center gap-1">
                Program: {filters.program}
                <button onClick={() => updateFilter('program', '')}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.status && (
              <Badge variant="outline" className="flex items-center gap-1">
                Status: {filters.status}
                <button onClick={() => updateFilter('status', '')}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.location && (
              <Badge variant="outline" className="flex items-center gap-1">
                Location: {filters.location}
                <button onClick={() => updateFilter('location', '')}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {(filters.dateRange.from || filters.dateRange.to) && (
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Date Range
                <button onClick={() => updateFilter('dateRange', { from: null, to: null })}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}