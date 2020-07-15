interface Trade {
    id: string;
    entryDate: Date;
    exitDate: Date;
    entryPrice: Number;
    exitPrice: Number;
    profit: Number; // Delta of entryPrice & exitPrice
    name: string;
    displayName: string;
}