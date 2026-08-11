import { startNode } from "./startNode";

import { familyNodes } from "./practiceAreas/familyNodes";
import { criminalNodes } from "./practiceAreas/criminalNodes";
import { propertyNodes } from "./practiceAreas/propertyNodes";
import { consumerNodes } from "./practiceAreas/consumerNodes";
import { corporateNodes } from "./practiceAreas/corporateNodes";
import { civilNodes } from "./practiceAreas/civilNodes";
import { bankingNodes } from "./practiceAreas/bankingNodes";
import { employmentLabourNodes } from "./practiceAreas/employmentLabourNodes";
import { arbitrationNodes } from "./practiceAreas/arbitrationNodes";
import { ipNodes } from "./practiceAreas/ipNodes";
import { taxationNodes } from "./practiceAreas/taxationNodes";
export { taxationNodes } from "./practiceAreas/taxationNodes";
import { insolvencyNodes } from "./practiceAreas/insolvencyNodes";
export { insolvencyNodes } from "./practiceAreas/insolvencyNodes";

export const nodes = {
  ...startNode,

  ...familyNodes,

  ...criminalNodes,

  ...propertyNodes,

  ...consumerNodes,

  ...corporateNodes,

  ...civilNodes,

  ...bankingNodes,

  ...employmentLabourNodes,

  ...arbitrationNodes,

  ...ipNodes,

  ...taxationNodes,

  ...insolvencyNodes,
};