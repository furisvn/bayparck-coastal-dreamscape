
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Home, Building, Check } from 'lucide-react';

const OverviewSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Project Overview</h2>
          <p className="text-gray-600 leading-relaxed">
            SVN Bay Parck is a 40-acre gated coastal estate designed for those who appreciate 
            exclusivity, natural beauty, and intelligent investment opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="overflow-hidden hover-translate">
            <CardContent className="p-0">
              <div className="h-48 bg-ocean-light/20 flex items-center justify-center">
                <MapPin size={48} className="text-ocean" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-3">Prime Location</h3>
                <p className="text-gray-600 text-sm">
                  Situated at Koshta Junction, Jeerupalem, near the Chennai–Kolkata Highway
                  with proximity to Visakhapatnam and the upcoming Bhogapuram International Airport.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-translate">
            <CardContent className="p-0">
              <div className="h-48 bg-ocean-light/20 flex items-center justify-center">
                <Home size={48} className="text-ocean" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-3">Beachfront Residential</h3>
                <p className="text-gray-600 text-sm">
                  206 premium plots ranging from 200–267 sq yds on 25 acres of beachfront land,
                  with freehold ownership and clearly demarcated boundaries.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-translate">
            <CardContent className="p-0">
              <div className="h-48 bg-ocean-light/20 flex items-center justify-center">
                <Building size={48} className="text-ocean" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-3">Luxury Resort</h3>
                <p className="text-gray-600 text-sm">
                  A boutique resort on 15 acres featuring premium cottages, world-class amenities,
                  and serene beachfront experiences perfect for getaways and investments.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl mb-6">Project Details</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check size={18} className="text-ocean-light" />
                <span>Total Area: <strong>40 acres</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-ocean-light" />
                <span>Beachfront Residential Plots: <strong>25 acres</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-ocean-light" />
                <span>Luxury Resort & Premium Cottages: <strong>15 acres</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-ocean-light" />
                <span>Developer: <strong>SVN Developers</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-ocean-light" />
                <span>Project Type: <strong>Gated Community + Boutique Beach Resort</strong></span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl mb-6">Legal & Regulatory Approvals</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check size={18} className="text-ocean-light" />
                <span>LP No. 31/2020/1178 / DTCP / DPMS</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-ocean-light" />
                <span>AP RERA No: P01070381701</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-ocean-light" />
                <span>SUDA Approved</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-ocean-light" />
                <span>Located outside the Coastal Regulation Zone (CRZ)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-ocean-light" />
                <span>100% safe to build</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
