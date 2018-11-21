import { VesselData } from './vessel-data';

export class CalculatePnPData {

poolName: string;
rules: string;
minMiles: number;
pnpUnits_FODailyQuote: number;
pnpUnits_GODailyQuote: number;
pnpUnits_TimeDailyQuote: number;
pnpValues_FOUnitValue: number;
pnpValues_GOUnitValue: number;
pnpValues_TimeUnitValue: number;
vesselList: Array<VesselData>;

}

