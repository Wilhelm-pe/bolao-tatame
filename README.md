# Bolão do Tatame 🥋

Bolão **entre amigos** para lutas de jiu-jitsu. Cada pessoa se cadastra pelo próprio
celular, vê o Pix na tela e paga; o organizador confirma quando o dinheiro cai.
O pool (bolo) e as cotações atualizam **ao vivo** para todos.

- **Modelo:** pool / pari-mutuel — o dinheiro de quem perdeu é dividido entre quem
  acertou, proporcional ao valor apostado.
- **Casa sem lucro:** uma fatia (que você define) vai como **bolsa para o lutador
  vencedor**. A organização não embolsa margem.
- **Pagamento:** Pix copia-e-cola + QR gerados na hora; confirmação manual pelo
  organizador (protegido por PIN).

## Stack
Site estático de **um arquivo** (`index.html`) + **Firebase Firestore** (grátis)
como banco em tempo real. Sem servidor próprio, sem build.

## Como colocar no ar
Siga o **`COMECE-AQUI.txt`**: criar o Firebase (±5 min), colar a config no topo do
`index.html`, publicar as regras do Firestore e subir na Vercel.

## Rodar local
Abra o `index.html` no navegador (depois de colar a config do Firebase).
Para várias lutas no mesmo site, use `#nomedoevento` no fim da URL.

## ⚖️ Aviso
Uso **privado entre amigos**, organização **sem fins lucrativos**. Não é uma casa
de apostas: não abra ao público geral nem opere com margem da casa — isso exige
licença federal no Brasil.
