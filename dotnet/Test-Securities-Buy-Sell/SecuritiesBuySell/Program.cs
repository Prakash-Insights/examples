using System;
using System.Collections.Generic;

namespace SecuritiesBuySell
{
    public class SecurityTradeChart
    {
        public int Volume { get; set; }
        public double Price { get; set; }
    }

    class Program
    {
        public static List<SecurityTradeChart> getBuyStock()
        {
            return new List<SecurityTradeChart>
            {
                new SecurityTradeChart() { Price = 100, Volume = 10},
                new SecurityTradeChart() { Price = 99, Volume = 50 },
                new SecurityTradeChart() { Price = 98, Volume = 100 },
                new SecurityTradeChart() { Price = 97, Volume = 30 },
                new SecurityTradeChart() { Price = 96, Volume = 55 },
                new SecurityTradeChart() { Price = 95, Volume = 40 },
            };
        }

        public static List<SecurityTradeChart> getSellStock()
        {
            return new List<SecurityTradeChart>
            {
                new SecurityTradeChart() { Price = 97, Volume = 80},
                new SecurityTradeChart() { Price = 98, Volume = 60 },
                new SecurityTradeChart() { Price = 99.5, Volume = 75},
                new SecurityTradeChart() { Price = 100, Volume = 90 },
                new SecurityTradeChart() { Price = 101, Volume = 100 },
                new SecurityTradeChart() { Price = 102, Volume = 20 },
            };
        }

        static void Main(string[] args)
        {
            List<SecurityTradeChart> buyStock = getBuyStock();
            List<SecurityTradeChart> sellStock = getSellStock();

            calculateOpeningPriceVolume(buyStock, sellStock);
        }

        public static void calculateOpeningPriceVolume(List<SecurityTradeChart> buyStock, List<SecurityTradeChart> sellStock)
        {
            for (int i = 0; i < sellStock.Count; i++)
            {
                for (int j = 0; j < buyStock.Count; i++)
                {
                    if (sellStock[i].Price <= buyStock[j].Price)
                    {
                        if (sellStock[i].Volume <= buyStock[j].Volume)
                        {
                            sellStock[i].Price = buyStock[j].Price;
                        }

                        if (sellStock[i].Volume > buyStock[j].Volume)
                        {
                            buyStock.Insert(0, new SecurityTradeChart()
                            {
                                Price = buyStock[j].Price,
                                Volume = sellStock[i].Volume,
                            });
                        }
                    }

                    if (sellStock[i].Price > buyStock[j].Price)
                    {
                        buyStock.Add(buyStock[0]);
                        return;
                    }
                }
            }
        }
    }
}
