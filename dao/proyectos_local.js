const guardarTC = (tc_vt, tc_comp) => {
    const TC = {
        id : 1,
        tc_vt : tc_vt,
        tc_comp : tc_comp,
    }

    const TCStr = localStorage.getItem("TC")

    
    if (TCStr != null) {
        const TC = JSON.parse(TCStr)
        TC.tc_vt=tc_vt
        TC.tc_comp=tc_comp
        localStorage.setItem("TC", JSON.stringify(TC))
    }else {
        localStorage.setItem("TC", JSON.stringify(TC))
    }
}

const obtenerTC = () => {
    const TCStr = localStorage.getItem("TC")
    if (TCStr != null) {
        return JSON.parse(TCStr)
    }else {
        return []
    }
}

export  {guardarTC,obtenerTC}