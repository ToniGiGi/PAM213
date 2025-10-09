import pandas as pd
import numpy as np

# Datos de la tabla
data = {
    "Año": list(range(1899, 1923)),
    "P": [100,101,112,122,124,122,143,152,151,126,155,159,153,177,184,169,189,225,227,223,218,231,179,240],
    "L": [100,105,110,117,122,121,125,134,140,123,143,147,148,155,156,152,156,183,198,201,196,194,146,161],
    "K": [100,107,114,122,131,138,149,163,176,189,198,208,216,226,236,244,266,298,335,366,387,407,417,431]
}

df = pd.DataFrame(data)

# Cálculo de ln(L/K) y ln(P/K)
df["ln(L/K)"] = np.log(df["L"]/df["K"])
df["ln(P/K)"] = np.log(df["P"]/df["K"])

# Regresión lineal (mínimos cuadrados)
x = df["ln(L/K)"]
y = df["ln(P/K)"]
alpha = ((x - x.mean()) * (y - y.mean())).sum() / ((x - x.mean())**2).sum()
ln_b = y.mean() - alpha * x.mean()
b = np.exp(ln_b)

import caas_jupyter_tools
caas_jupyter_tools.display_dataframe_to_user(name="Tabla con ln(L/K) y ln(P/K)", dataframe=df[["Año","ln(L/K)","ln(P/K)"]])

alpha, b, ln_b
