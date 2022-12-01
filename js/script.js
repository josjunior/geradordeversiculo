let frases = [
     '"Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna." João 3:16',
     'Respondeu Jesus: "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim". João 14:6',
     'Então disse Jesus: "Deixem vir a mim as crianças e não as impeçam; pois o Reino dos céus pertence aos que são semelhantes a elas". Mateus 19:14',
     '"Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus." 1Tessalonicenses 5:18',  
     '"Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus." Romanos 12:2', 
     '"Honra teu pai e tua mãe, a fim de que tenhas vida longa na terra que o Senhor, o teu Deus, te dá." Êxodo 20:12',   
     '"Cura-me, Senhor, e serei curado salva-me, e serei salvo, pois tu és aquele a quem eu louvo." Jeremias 17:14',   
     'Senhor meu Deus, a ti clamei por socorro, e tu me curaste." Salmos 30:2',
     '"Prestem culto ao Senhor, o Deus de vocês, e ele os abençoará, dando a vocês alimento e água. Tirarei a doença do meio de vocês." Êxodo 23:25',
     '"Espere no Senhor. Seja forte! Coragem! Espere no Senhor." Salmos 27:14',
     '"O Senhor é a minha luz e a minha salvação; de quem terei temor? O Senhor é o meu forte refúgio; de quem terei medo?" Salmos 27:1',
     '"Mas eu, quando estiver com medo, confiarei em ti. Em Deus, cuja palavra eu louvo, em Deus eu confio e não temerei. Que poderá fazer-me o simples mortal?." Salmos 56:3-4',
     '"Pois vocês não receberam um espírito que os escravize para novamente temerem, mas receberam o Espírito que os torna filhos por adoção, por meio do qual clamamos: "Aba, Pai."" Romanos 8:15',
     '"Pois Deus não nos deu espírito de covardia, mas de poder, de amor e de equilíbrio." 2Timóteo 1:7',
     '"No amor não há medo; ao contrário o perfeito amor expulsa o medo, porque o medo supõe castigo. Aquele que tem medo não está aperfeiçoado no amor." João 4:18',
     '"Então o Senhor Deus declarou: "Não é bom que o homem esteja só; farei para ele alguém que o auxilie e lhe corresponda." Gênesis 2:18',
     '"Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe". Mateus 19:6',
     '"Suportem-se uns aos outros e perdoem as queixas que tiverem uns contra os outros. Perdoem como o Senhor lhes perdoou." Colossenses 3:13',
     '"Nele temos a redenção por meio de seu sangue, o perdão dos pecados, de acordo com as riquezas da graça de Deus." Éfesios 1:7',
     '"O amigo ama em todos os momentos; é um irmão na adversidade." Provérbios 17:17',
     '"Aquele que anda com os sábios será cada vez mais sábio, mas o companheiro dos tolos acabará mal." Provérbios 13:20',
     '"Honra teu pai e tua mãe, a fim de que tenhas vida longa na terra que o Senhor,o teu Deus, te dá." Êxodo 20:12',
     '"Pais, não irritem seus filhos; antes criem-nos segundo a instrução e o conselho do Senhor." Efésios 6:4',
     '"Instrua a criança segundo os objetivos que você tem para ela, e mesmo com o passar dos anos não se desviará deles." Provérbios 22:6',
     '"Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus." 1Tessalonicenses 5:18',
     '"Graças a Deus por seu dom indescritível!." 2Coríntios 9:15',
     '"Dou graças a Deus, a quem sirvo com a consciência limpa, como o serviram os meus antepassados, ao lembrar-me constantemente de você, noite e dia, em minhas orações." 2Timóteo 1:3',
     '"Sempre dou graças a meu Deus por vocês, por causa da graça que dele receberam em Cristo Jesus." 1Coríntios 1:4',
     '"Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus." Filipenses 4:6',
     '"O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça; o Senhor volte para ti o seu rosto e te dê paz." Números 6:24-26',
     '"Dando graças constantemente a Deus Pai por todas as coisas, em nome de nosso Senhor Jesus Cristo." Efésios 5:20',
     '"Tu és o meu Deus; graças te darei! Ó meu Deus, eu te exaltarei! Deem graças ao Senhor, porque ele é bom; o seu amor dura para sempre." Salmos 118:28-29',
     '"Os filhos dos filhos são uma coroa para os idosos, e os pais são o orgulho dos seus filhos." Provérbios 17:6',
     '"Todos os seus filhos serão ensinados pelo Senhor, e grande será a paz de suas crianças." Isaías 54:13',
     '"Filhos, obedeçam a seus pais em tudo, pois isso agrada ao Senhor." Colossenses 3:20',
     '"Tudo posso naquele que me fortalece." Filipenses 4:13',
     '"O Senhor é a minha luz e a minha salvação; de quem terei temor? O Senhor é o meu forte refúgio; de quem terei medo?" Salmos 27:1',
     '"Pois o Senhor, o seu Deus, os acompanhará e lutará por vocês contra os seus inimigos, para dar a vitória a vocês." Deuteronômio 20:4',
     '"Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês." Mateus 11:28',
     '"Sejam fortes e corajosos, todos vocês que esperam no Senhor!" Salmos 31:24',
     '"Mas, sejam fortes e não desanimem, pois o trabalho de vocês será recompensado." 2Crônicas 15:7',
     '"Ele fortalece o cansado e dá grande vigor ao que está sem forças." Isaías 40:29',
     '"Como pode o jovem manter pura a sua conduta? Vivendo de acordo com a tua palavra." Salmos 119:9',
     '"Ninguém o despreze pelo fato de você ser jovem, mas seja um exemplo para os fiéis na palavra, no procedimento, no amor, na fé e na pureza." 1Timóteo 4:12',
     '"Pois tu és a minha esperança, ó Soberano Senhor, em ti está a minha confiança desde a juventude." Salmos 71:5',
     '"Quanto ao dia e à hora ninguém sabe, nem os anjos no céu, nem o Filho, senão somente o Pai." Marcos 13:32',
     '"Se alguém se envergonhar de mim e das minhas palavras, o Filho do homem se envergonhará dele quando vier em sua glória e na glória do Pai e dos santos anjos." Lucas 9:26',
     '"Eis que venho em breve! A minha recompensa está comigo, e eu retribuirei a cada um de acordo com o que fez." Apocalipse 22:12',
     '"Mil poderão cair ao seu lado; dez mil, à sua direita, mas nada o atingirá." Salmos 91:7',
     '"Não me negues a tua misericórdia, Senhor; que o teu amor e a tua verdade sempre me protejam." Salmos 40:11',
     '"Que o Senhor te responda no tempo da angústia; o nome do Deus de Jacó te proteja! Do santuário te envie auxílio e de Sião te dê apoio." Salmos 20:1-2',
];
  
  function gerarFrase(){
      let frase = frases[
        Math.floor(Math.random() *       
        frases.length)
      ]
      
      document.querySelector('#frase-gerada').textContent=frase;
  }

  function apagar() {
    document.getElementById("paragraphs").style.display = "none";
  }
  function mostrar() {
    document.getElementById("paragraphs").style.display = "block";
  }

  function openNav() {
    document.getElementById("myNav").style.width = '100%';
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = '0%';
  }

