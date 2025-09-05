import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, BarChart3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface GenerateReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GenerateReportModal({ isOpen, onClose }: GenerateReportModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    reportType: "",
    dateRange: { from: null as Date | null, to: null as Date | null },
    programs: [] as string[],
    format: "pdf",
    includeCharts: true,
    includeFinancials: true,
    includePhotos: false,
    recipients: [] as string[]
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const reportTypes = [
    { value: "impact", label: "Impact Report", icon: BarChart3 },
    { value: "financial", label: "Financial Report", icon: FileText },
    { value: "program", label: "Program Report", icon: Calendar },
    { value: "monthly", label: "Monthly Summary", icon: Calendar },
    { value: "annual", label: "Annual Report", icon: FileText },
    { value: "donor", label: "Donor Report", icon: BarChart3 }
  ];

  const availablePrograms = [
    "Education Support Initiative",
    "Healthcare Access Program", 
    "Community Development Project",
    "Emergency Relief Fund",
    "Economic Empowerment Program"
  ];

  const handleProgramToggle = (program: string) => {
    const updatedPrograms = formData.programs.includes(program)
      ? formData.programs.filter(p => p !== program)
      : [...formData.programs, program];
    setFormData({ ...formData, programs: updatedPrograms });
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.reportType) {
      toast({
        title: "Validation Error",
        description: "Please select a report type.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    // Simulate report generation
    setTimeout(() => {
      toast({
        title: "Report Generated",
        description: `Your ${reportTypes.find(t => t.value === formData.reportType)?.label} has been generated successfully.`,
      });
      setIsGenerating(false);
      onClose();
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Generate Report
          </DialogTitle>
          <DialogDescription>
            Create detailed reports for analysis and sharing with stakeholders.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleGenerate} className="space-y-6">
          {/* Report Type */}
          <div className="space-y-3">
            <Label>Report Type *</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {reportTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, reportType: type.value })}
                  className={`p-3 rounded-lg border text-left transition-all hover:border-primary/50 ${
                    formData.reportType === type.value 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border hover:bg-accent/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <type.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{type.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Date Range */}
          <div className="space-y-2">
            <Label>Date Range</Label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-sm text-muted-foreground">From</Label>
                <DatePicker
                  selected={formData.dateRange.from}
                  onSelect={(date) => setFormData({ 
                    ...formData, 
                    dateRange: { ...formData.dateRange, from: date || null } 
                  })}
                  placeholderText="Start date"
                />
              </div>
              <div>
                <Label className="text-sm text-muted-foreground">To</Label>
                <DatePicker
                  selected={formData.dateRange.to}
                  onSelect={(date) => setFormData({ 
                    ...formData, 
                    dateRange: { ...formData.dateRange, to: date || null } 
                  })}
                  placeholderText="End date"
                />
              </div>
            </div>
          </div>

          {/* Programs to Include */}
          <div className="space-y-3">
            <Label>Programs to Include</Label>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {availablePrograms.map((program) => (
                <div key={program} className="flex items-center space-x-2">
                  <Checkbox
                    id={program}
                    checked={formData.programs.includes(program)}
                    onCheckedChange={() => handleProgramToggle(program)}
                  />
                  <Label htmlFor={program} className="text-sm">{program}</Label>
                </div>
              ))}
            </div>
            {formData.programs.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {formData.programs.map((program) => (
                  <Badge key={program} variant="outline" className="text-xs">
                    {program}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Format and Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Format</Label>
              <Select value={formData.format} onValueChange={(value) => setFormData({ ...formData, format: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF Document</SelectItem>
                  <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                  <SelectItem value="powerpoint">PowerPoint Presentation</SelectItem>
                  <SelectItem value="word">Word Document</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Include Options</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="charts"
                    checked={formData.includeCharts}
                    onCheckedChange={(checked) => setFormData({ ...formData, includeCharts: !!checked })}
                  />
                  <Label htmlFor="charts" className="text-sm">Charts & Graphs</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="financials"
                    checked={formData.includeFinancials}
                    onCheckedChange={(checked) => setFormData({ ...formData, includeFinancials: !!checked })}
                  />
                  <Label htmlFor="financials" className="text-sm">Financial Data</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="photos"
                    checked={formData.includePhotos}
                    onCheckedChange={(checked) => setFormData({ ...formData, includePhotos: !!checked })}
                  />
                  <Label htmlFor="photos" className="text-sm">Program Photos</Label>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isGenerating}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-gradient-brand text-primary-foreground"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>Generating...</>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Generate Report
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}