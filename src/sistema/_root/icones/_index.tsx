// icones.ts
import {
    MdAttachMoney,
    MdCardGiftcard,
    MdExitToApp,
    MdHowToReg,
    MdOutlineAccessTime,
    MdOutlineAdminPanelSettings,
    MdSchool
} from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { PiDotsThreeFill } from "react-icons/pi";
import { FaRegFolder } from "react-icons/fa";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { LuFile } from "react-icons/lu";

export const icones = {
    folhaPagamento: MdAttachMoney,
    pontoFrequencia: MdOutlineAccessTime,
    beneficios: MdCardGiftcard,
    treinamentos: MdSchool,
    recrutamentoSelecao: MdHowToReg,
    desligamentos: MdExitToApp,
    administracao: MdOutlineAdminPanelSettings,
    colaboradores: BsPersonPlus,
    setaParaDireita: IoIosArrowForward,
    tresPontos: PiDotsThreeFill,
    tresPontosCirculado: HiOutlineDotsCircleHorizontal,
    pasta: FaRegFolder,
    arquivo: LuFile
};
