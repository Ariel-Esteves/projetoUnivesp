export interface Nfe{
    ICMSFields:{
        CST: string;
        Origem: string;
        ModBC: string;
        VBC: number;
        PICMS: number;
        VICMS: number;
        ModBCST: string;
        VBCST: number;
        PICMSST: number;
        VICMSST: number;
        pRedBC: number;
        vRedBC: number;
        pMVAST: number;
        pICMSST: number;
        vICMSDeson: number;
      }
      
      IPIFields:{
        CST: string;
        ClEnq?: string;
        CNPJProd?: string;
        cSelo?: string;
        qSelo?: string;
        cEnq?: string;
        vBC: number;
        pIPI: number;
        vIPI: number;
      }
      PISFields:{
        CST: string;
        vBC?: number;
        pPIS?: number;
        vPIS?: number;
      }
      COFINSFields:{
        CST: string;
        vBC?: number;
        pCOFINS?: number;
        vCOFINS?: number;
      }
}