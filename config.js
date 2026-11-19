// Dados da empresa que aparecem no cabeçalho do PDF. Edite aqui e publique de novo.
window.VISTORIA_CONFIG = {
  appName: "Vistoria Digital",          // aparece no rodapé do PDF
  empresa: "Uni-Guincho",
  cnpj: "70.124.219/0001-88",
  telefone: "(65) 99699-2472",
  endereco: "R. Cel. Gonçalo de Figueiredo, 250 - Centro Norte, Várzea Grande - MT, 78110-325",
  logo: "assets/logo.jpg",               // deixe "" para ficar sem logo
  numeroInicial: 1,                      // primeiro número de vistoria neste aparelho
  corPrincipal: [27, 107, 63],           // RGB do cabeçalho do PDF

  // Salvar na nuvem (acessar as vistorias de qualquer aparelho). Veja o passo a passo no README.
  // Deixe os dois vazios para guardar só neste aparelho.
  supabaseUrl: "https://ffkovcacovbomjmmsvln.supabase.co",                       // ex.: "https://abcdefgh.supabase.co"
  supabaseKey: "sb_publishable_Ns6TPLprdqXrS8bVTw4k6w_vkAO9gtC",                       // chave "anon" / "publishable" do projeto (nunca a "service_role" / "secret")
  exigirLogin: false                     // false = abre direto, sem login. true = pede e-mail e senha (veja o README)
};
