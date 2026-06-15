/*
  # Add Multi-Language Support for Educational Articles

  ## Overview
  This migration adds support for storing educational article content in multiple languages
  by creating a translations table that links to the main articles table.

  ## New Tables
    - `educational_article_translations`
      - `id` (uuid, primary key) - Unique identifier
      - `article_id` (uuid, foreign key) - Reference to educational_articles
      - `language` (text) - Language code (en, fr, it, de, es, el)
      - `title` (text) - Translated article title
      - `description` (text) - Translated description
      - `content` (text) - Translated content in markdown
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  ## Security
    - Enable RLS on educational_article_translations table
    - Allow public read access to all translations
    - Unique constraint on (article_id, language) to prevent duplicates

  ## Notes
    - English content will remain in the main educational_articles table
    - Other languages will be stored in the translations table
    - Components will check translations table first, fall back to English if not found
*/

CREATE TABLE IF NOT EXISTS educational_article_translations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid NOT NULL REFERENCES educational_articles(id) ON DELETE CASCADE,
  language text NOT NULL CHECK (language IN ('fr', 'it', 'de', 'es', 'el')),
  title text NOT NULL,
  description text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(article_id, language)
);

ALTER TABLE educational_article_translations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read article translations"
  ON educational_article_translations
  FOR SELECT
  USING (true);

CREATE INDEX IF NOT EXISTS idx_article_translations_article_id ON educational_article_translations(article_id);
CREATE INDEX IF NOT EXISTS idx_article_translations_language ON educational_article_translations(language);

-- Insert French translations for existing articles
INSERT INTO educational_article_translations (article_id, language, title, description, content)
SELECT 
  id,
  'fr',
  CASE slug
    WHEN 'building-your-first-budget' THEN 'Créer Votre Premier Budget'
    WHEN 'emergency-fund-essentials' THEN 'Les Essentiels du Fonds d''Urgence'
    WHEN 'understanding-credit-scores' THEN 'Comprendre les Scores de Crédit'
    WHEN 'investing-101-getting-started' THEN 'Investissement 101: Débuter'
    WHEN 'power-of-compound-interest' THEN 'Le Pouvoir des Intérêts Composés'
    WHEN 'debt-snowball-vs-debt-avalanche' THEN 'Boule de Neige vs Avalanche de Dettes'
  END,
  CASE slug
    WHEN 'building-your-first-budget' THEN 'Apprenez les fondamentaux de la création d''un budget personnel qui fonctionne réellement pour votre style de vie et vos objectifs financiers.'
    WHEN 'emergency-fund-essentials' THEN 'Découvrez pourquoi un fonds d''urgence est crucial et comment en construire un qui vous protège des catastrophes financières.'
    WHEN 'understanding-credit-scores' THEN 'Démystifiez les scores de crédit et apprenez des stratégies éprouvées pour améliorer votre cote de crédit.'
    WHEN 'investing-101-getting-started' THEN 'Commencez votre parcours d''investissement avec ce guide complet sur les actions, les obligations et la construction de richesse à long terme.'
    WHEN 'power-of-compound-interest' THEN 'Comprenez comment les intérêts composés peuvent augmenter exponentiellement votre richesse avec un investissement constant.'
    WHEN 'debt-snowball-vs-debt-avalanche' THEN 'Comparez deux méthodes éprouvées pour rembourser vos dettes et choisissez la stratégie qui convient le mieux à votre situation.'
  END,
  CASE slug
    WHEN 'building-your-first-budget' THEN '# Créer Votre Premier Budget

Créer un budget est la base du succès financier. Voici comment commencer:

## 1. Suivez Vos Revenus
Commencez par calculer votre revenu mensuel total après impôts. Incluez toutes les sources: salaire, travail indépendant, investissements et tout autre revenu régulier.

## 2. Listez Vos Dépenses
Catégorisez vos dépenses en:
- **Dépenses fixes**: Loyer/hypothèque, assurance, remboursements de prêts
- **Dépenses variables**: Épicerie, services publics, essence
- **Dépenses discrétionnaires**: Divertissement, restaurants, loisirs

## 3. Appliquez la Règle 50/30/20
- 50% pour les besoins (logement, nourriture, services publics)
- 30% pour les envies (divertissement, loisirs)
- 20% pour l''épargne et le remboursement des dettes

## 4. Utilisez les Bons Outils
Envisagez d''utiliser des applications de budgétisation ou des feuilles de calcul pour suivre automatiquement vos dépenses.

## 5. Révisez et Ajustez
Révisez votre budget mensuellement et ajustez selon les besoins. La vie change, et votre budget devrait aussi.'
    
    WHEN 'emergency-fund-essentials' THEN '# Les Essentiels du Fonds d''Urgence

Un fonds d''urgence est votre filet de sécurité financière. Voici tout ce que vous devez savoir:

## Pourquoi Vous Avez Besoin d''un Fonds d''Urgence
La vie est imprévisible. Les urgences médicales, la perte d''emploi, les réparations de voiture ou l''entretien de la maison peuvent survenir à tout moment. Un fonds d''urgence vous évite de vous endetter lorsque des dépenses imprévues surviennent.

## Combien Devriez-Vous Épargner?
Les experts financiers recommandent:
- **Minimum**: 1 000 $ pour les urgences de base
- **Idéal**: 3 à 6 mois de frais de subsistance
- **Emplois à haut risque**: 6 à 12 mois de dépenses

## Où Garder Votre Fonds d''Urgence
- Compte d''épargne à haut rendement
- Compte du marché monétaire
- Séparé de votre compte courant régulier

## Construire Votre Fonds Étape par Étape
1. Commencez petit - même 25 $/semaine s''accumule
2. Automatisez votre épargne
3. Épargnez les gains exceptionnels (remboursements d''impôts, primes)
4. Supprimez une dépense inutile
5. Célébrez les jalons

## Quand l''Utiliser
N''utilisez votre fonds d''urgence que pour de véritables urgences:
- Urgences médicales
- Réparations automobiles essentielles
- Perte d''emploi
- Réparations urgentes de la maison

PAS pour les vacances, le shopping ou les dépenses planifiées.'
    
    WHEN 'understanding-credit-scores' THEN '# Comprendre les Scores de Crédit

Votre score de crédit affecte les prêts, les cartes de crédit et même les opportunités d''emploi. Voici ce que vous devez savoir:

## Qu''est-ce qu''un Score de Crédit?
Un score de crédit est un nombre à trois chiffres (300-850) qui représente votre solvabilité. Les prêteurs l''utilisent pour décider d''approuver vos demandes et quels taux d''intérêt offrir.

## Plages de Score de Crédit
- **800-850**: Exceptionnel
- **740-799**: Très Bon
- **670-739**: Bon
- **580-669**: Passable
- **300-579**: Mauvais

## Qu''est-ce qui Affecte Votre Score de Crédit?
1. **Historique de Paiement (35%)**: Payez les factures à temps, à chaque fois
2. **Utilisation du Crédit (30%)**: Gardez les soldes en dessous de 30% des limites
3. **Durée de l''Historique de Crédit (15%)**: Plus long est meilleur
4. **Nouveau Crédit (10%)**: Trop de demandes nuisent à votre score
5. **Mix de Crédit (10%)**: Variété de types de crédit

## Comment Améliorer Votre Score de Crédit
- Payez toutes les factures à temps
- Réduisez les soldes de cartes de crédit
- Ne fermez pas les anciens comptes
- Limitez les nouvelles demandes de crédit
- Vérifiez votre rapport de crédit pour les erreurs
- Devenez utilisateur autorisé
- Envisagez une carte de crédit sécurisée

## Mythes Courants sur le Crédit
**Mythe**: Vérifier votre crédit nuit à votre score
**Vérité**: Les enquêtes douces n''affectent pas votre score

**Mythe**: Vous devez maintenir un solde
**Vérité**: Payer intégralement est toujours mieux

**Mythe**: Fermer les cartes améliore votre score
**Vérité**: Cela peut en fait nuire en réduisant le crédit disponible'
    
    WHEN 'investing-101-getting-started' THEN '# Investissement 101: Débuter

Investir peut sembler intimidant, mais c''est essentiel pour construire une richesse à long terme. Voici votre guide pour débutants:

## Pourquoi Investir?
- Battre l''inflation
- Construire la richesse au fil du temps
- Atteindre les objectifs financiers (retraite, maison, éducation)
- Générer un revenu passif

## Bases de l''Investissement

### Actions
Parts de propriété dans une entreprise. Risque plus élevé, rendement potentiel plus élevé.

### Obligations
Prêts aux entreprises ou aux gouvernements. Risque plus faible, rendements plus faibles.

### Fonds Communs de Placement
Portefeuilles d''actions et d''obligations gérés professionnellement.

### FNB (Fonds Négociés en Bourse)
Similaires aux fonds communs mais se négocient comme des actions.

### Fonds Indiciels
Fonds à faible coût qui suivent les indices de marché comme le S&P 500.

## Stratégies d''Investissement

### Moyenne d''Achat
Investissez un montant fixe régulièrement, quelle que soit la condition du marché.

### Diversification
Ne mettez pas tous les œufs dans le même panier. Répartissez entre les types d''actifs.

### Pensée à Long Terme
Le temps sur le marché bat le timing du marché.

## Liste de Contrôle pour Débuter
1. ✓ Construisez d''abord le fonds d''urgence
2. ✓ Remboursez les dettes à intérêt élevé
3. ✓ Comprenez votre tolérance au risque
4. ✓ Ouvrez un compte d''investissement
5. ✓ Commencez avec des fonds indiciels à faible coût
6. ✓ Contribuez régulièrement
7. ✓ Ne paniquez pas pendant les baisses

## Erreurs Courantes à Éviter
- Essayer de chronométrer le marché
- Laisser les émotions guider les décisions
- Ne pas diversifier
- Payer des frais élevés
- Ignorer les comptes de retraite
- Suivre les conseils à la mode

## Comptes Avantageux sur le Plan Fiscal
- **401(k)**: Plan de retraite de l''employeur
- **IRA**: Compte de retraite individuel
- **Roth IRA**: Croissance et retraits libres d''impôt'
    
    WHEN 'power-of-compound-interest' THEN '# Le Pouvoir des Intérêts Composés

Albert Einstein aurait appelé les intérêts composés "la huitième merveille du monde." Voici pourquoi:

## Qu''est-ce que les Intérêts Composés?
Les intérêts composés sont des intérêts gagnés à la fois sur votre capital initial ET sur les intérêts accumulés des périodes précédentes. Votre argent fait de l''argent, et cet argent fait plus d''argent.

## Intérêts Simples vs Composés

### Exemple d''Intérêts Simples
10 000 $ à 5% d''intérêt simple pendant 30 ans:
**Résultat**: 25 000 $

### Exemple d''Intérêts Composés
10 000 $ à 5% composés annuellement pendant 30 ans:
**Résultat**: 43 219 $

**La différence**: 18 219 $ d''argent supplémentaire!

## La Règle de 72
Moyen rapide d''estimer le temps de doublement:
**72 ÷ Taux d''Intérêt = Années pour Doubler**

Exemples:
- Rendement de 6%: 72 ÷ 6 = 12 ans pour doubler
- Rendement de 8%: 72 ÷ 8 = 9 ans pour doubler
- Rendement de 10%: 72 ÷ 10 = 7,2 ans pour doubler

## Commencer Tôt Fait une Énorme Différence

### Exemple: Deux Investisseurs

**Sarah** commence à 25 ans:
- Investit 300 $/mois jusqu''à 35 ans (10 ans)
- Total investi: 36 000 $
- À 65 ans (rendement de 8%): 518 113 $

**Mike** commence à 35 ans:
- Investit 300 $/mois jusqu''à 65 ans (30 ans)
- Total investi: 108 000 $
- À 65 ans (rendement de 8%): 447 107 $

Sarah a investi 72 000 $ DE MOINS mais a fini avec 71 000 $ DE PLUS!

## Maximiser les Intérêts Composés
1. Commencez le plus tôt possible
2. Contribuez régulièrement
3. Réinvestissez les dividendes
4. Soyez patient - ne retirez pas
5. Maximisez les comptes avantageux sur le plan fiscal
6. Augmentez les contributions au fil du temps

## Intérêts Composés dans la Dette
Attention: Les intérêts composés jouent contre vous avec les dettes! La dette de carte de crédit se compose rapidement, rendant difficile le remboursement.'
    
    WHEN 'debt-snowball-vs-debt-avalanche' THEN '# Boule de Neige vs Avalanche de Dettes

Deux stratégies populaires pour s''attaquer aux dettes. Laquelle vous convient?

## Méthode de la Boule de Neige de Dettes

### Comment Ça Marche
1. Listez les dettes de la plus petite à la plus grande balance
2. Payez les minimums sur toutes les dettes
3. Mettez l''argent supplémentaire vers la plus petite dette
4. Quand la plus petite est remboursée, transférez ce paiement à la suivante
5. Répétez jusqu''à être sans dettes

### Avantages
- Les victoires rapides augmentent la motivation
- Momentum psychologique
- Plus simple à suivre

### Inconvénients
- Peut payer plus d''intérêts au total
- Prend plus de temps mathématiquement

### Meilleur Pour
Les personnes qui ont besoin de motivation et de victoires rapides

## Méthode de l''Avalanche de Dettes

### Comment Ça Marche
1. Listez les dettes du taux d''intérêt le plus élevé au plus bas
2. Payez les minimums sur toutes les dettes
3. Mettez l''argent supplémentaire vers la dette à intérêt le plus élevé
4. Quand la plus élevée est remboursée, passez à la suivante
5. Répétez jusqu''à être sans dettes

### Avantages
- Économise le plus d''argent sur les intérêts
- Remboursement plus rapide mathématiquement
- Méthode la plus efficace

### Inconvénients
- Progrès initial plus lent
- Peut être décourageant
- Nécessite de la discipline

### Meilleur Pour
Les personnes motivées par l''économie d''argent et l''efficacité

## Exemple de Comparaison

**Dettes:**
- Carte de Crédit 1: 500 $ à 24% APR
- Carte de Crédit 2: 2 000 $ à 20% APR
- Prêt Personnel: 5 000 $ à 8% APR
- Prêt Auto: 10 000 $ à 5% APR

**Ordre Boule de Neige**: 500 $ → 2 000 $ → 5 000 $ → 10 000 $
**Ordre Avalanche**: 500 $ → 2 000 $ → 5 000 $ → 10 000 $

## Laquelle Devriez-Vous Choisir?

Choisissez **Boule de Neige** si:
- Vous avez besoin de motivation
- Vous avez beaucoup de petites dettes
- Vous valorisez les victoires psychologiques

Choisissez **Avalanche** si:
- Vous voulez économiser le plus d''argent
- Vous êtes discipliné
- Les taux d''intérêt varient considérablement

## Approche Hybride
Certaines personnes combinent les deux méthodes:
1. Remboursez une petite dette pour une victoire rapide
2. Passez à la méthode de l''avalanche
3. Obtenez motivation + économies

## Autres Étapes Importantes
- Arrêtez d''utiliser les cartes de crédit
- Construisez un petit fonds d''urgence
- Créez un budget
- Augmentez les revenus si possible
- Négociez des taux d''intérêt plus bas'
  END
FROM educational_articles
WHERE slug IN (
  'building-your-first-budget',
  'emergency-fund-essentials',
  'understanding-credit-scores',
  'investing-101-getting-started',
  'power-of-compound-interest',
  'debt-snowball-vs-debt-avalanche'
)
ON CONFLICT (article_id, language) DO NOTHING;