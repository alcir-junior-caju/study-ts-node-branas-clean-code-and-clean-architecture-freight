import FreightCalculator from "../../domain/entity/FreightCalculator";

type Input = {
  items: {
    width: number;
    height: number;
    length: number;
    weight: number;
    quantity: number;
  }[];
};

type Output = {
  freight: number;
};

export default class CalculateFreight {
  async execute(input: Input): Promise<Output> {
    const output: Output = {
      freight: 0,
    };
    if (input.items) {
      for (const item of input.items) {
        const itemFreight = FreightCalculator.calculate(
          item.width,
          item.height,
          item.length,
          item.weight,
          item.quantity
        );
        output.freight += itemFreight;
      }
    }
    return output;
  }
}
