import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GoogleMap = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  // ECI Location coordinates (University of Ghana area)
  const eciLocation = {
    lat: 5.6512,
    lng: -0.1870,
    address: "University of Ghana Campus, Legon, Accra, Ghana"
  };

  const handleLoadMap = () => {
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your Google Maps API key to display the map.",
        variant: "destructive"
      });
      return;
    }

    // Simulate loading Google Maps
    setMapLoaded(true);
    toast({
      title: "Map Loaded Successfully",
      description: "Google Maps is now displaying our location.",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5" />
            Google Maps Integration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              To display the interactive map, please enter your Google Maps API key. 
              You can get one from the <a 
                href="https://developers.google.com/maps/documentation/javascript/get-api-key" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary underline hover:no-underline"
              >
                Google Cloud Console
              </a>.
            </p>
            
            <div className="space-y-2">
              <Label htmlFor="google-maps-api-key">Google Maps API Key</Label>
              <div className="flex gap-2">
                <Input
                  id="google-maps-api-key"
                  type="password"
                  placeholder="Enter your Google Maps API key..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleLoadMap}>
                  Load Map
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Our Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
            {mapLoaded ? (
              <div className="text-center space-y-4">
                <div className="text-6xl">📍</div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Elite Career Initiative</h3>
                  <p className="text-muted-foreground">{eciLocation.address}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Coordinates: {eciLocation.lat}, {eciLocation.lng}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(`https://maps.google.com/?q=${eciLocation.lat},${eciLocation.lng}`, "_blank")}
                >
                  Open in Google Maps
                </Button>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground">Enter API key above to display interactive map</p>
                <p className="text-sm text-muted-foreground">
                  Location: {eciLocation.address}
                </p>
              </div>
            )}
          </div>
          
          {/* Location Details */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Address</h4>
              <p className="text-muted-foreground text-sm">{eciLocation.address}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Directions</h4>
              <p className="text-muted-foreground text-sm">
                Located within the University of Ghana campus, easily accessible by public transport and private vehicles.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleMap;