import { Badge } from "@chakra-ui/react";
import React from "react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
