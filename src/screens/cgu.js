import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
const MainContainer = styled.main`
  color: white;
  padding: 5px;
`;
class Condition extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer>
        {this.props.lang && this.props.lang.value === "fr" && (
          <>
            <p className="title">Conditions Générales D'utilisation</p>
            <p className="condition">
              Les présentes conditions générales régissent l’utilisation de ce
              site www.4bpremium.com. <br />
              Ce site appartient et est géré par Anais Chesnel En utilisant ce
              site, vous indiquez que vous avez lu et compris les conditions
              d’utilisation et que vous acceptez de les respecter en tout temps.
            </p>
            <p className="condition">Type de site : Site de Motivation</p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Propriété intellectuelle</strong>
            </p>
            <p className="condition">
              Tout contenu publié et mis à disposition sur ce site est la
              propriété de Anais Chesnel et de ses créateurs. Cela comprend,
              mais n’est pas limité aux images, textes, logos, documents,
              fichiers téléchargeables et tout ce qui contribue à la composition
              de ce site.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Compte</strong>
            </p>
            <p className="condition">
              Lorsque vous créez un compte sur notre site, vous acceptez ce qui
              suit :{" "}
              <ol>
                <li>
                  {" "}
                  que vous êtes seul responsable de votre compte et de la
                  sécurité et la confidentialité de votre compte, y compris les
                  mots de passe ou les renseignements de nature délicate joints
                  à ce compte, et{" "}
                </li>
                <li>
                  que tous les renseignements personnels que vous nous
                  fournissez par l’entremise de votre compte sont à jour, exacts
                  et véridiques et que vous mettrez à jour vos renseignements
                  personnels s’ils changent.
                </li>
              </ol>{" "}
              Nous nous réservons le droit de suspendre ou de résilier votre
              compte si vous utilisez notre site illégalement ou si vous violez
              les conditions d’utilisation acceptable.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Ventes des biens et services</strong>
            </p>
            <p className="condition">
              Ce document régit la vente des services mis à disposition sur
              notre site.
            </p>
            <p className="condition">
              Les services que nous offrons comprennent :{" "}
              <ul>
                <li>
                  {" "}
                  Conseil : Les services liés à ce document sont les services
                  qui sont affichés sur notre site au moment où vous y accédez.
                  Toutes les informations, descriptions ou images que nous
                  fournissons sur nos services sont décrites et présentées avec
                  la plus grande précision possible. Cependant, nous ne sommes
                  pas légalement tenus par ces informations, descriptions ou
                  images car nous ne pouvons pas garantir l’exactitude de chaque
                  produit ou service que nous fournissons. Vous acceptez
                  d’acheter ces services à vos propres risques.
                </li>
              </ul>{" "}
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Paiements</strong>
            </p>
            <p className="condition">
              Nous acceptons les modes de paiement suivants sur ce site :{" "}
              <ul>
                <li>
                  {" "}
                  Carte bancaire : Lorsque vous nous fournissez vos
                  renseignements de paiement, vous nous confirmez que vous avez
                  autorisé l’utilisation et l’accès à l’instrument de paiement
                  que vous avez choisi d’utiliser. En nous fournissant vos
                  détails de paiement, vous confirmez que vous nous autorisez à
                  facturer le montant dû à cet instrument de paiement. Si nous
                  estimons que votre paiement a violé une loi ou l’une de nos
                  conditions d’utilisation, nous nous réservons le droit
                  d’annuler votre transaction.
                </li>
              </ul>{" "}
            </p>
            <p className="condition">Services </p>{" "}
            <p className="condition">
              Les services seront facturés en totalité à la commande du service.{" "}
            </p>{" "}
            <p className="condition">Abonnements </p>{" "}
            <p className="condition">
              Tous nos abonnements récurrents seront automatiquement facturés et
              renouvelés jusqu’à ce que nous recevions d’avis que vous souhaitez
              annuler l’abonnement.{" "}
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Limitation de responsabilité</strong>
            </p>{" "}
            <p className="condition">
              Anais Chesnel ou l’un de ses employés sera tenu responsable de
              tout problème découlant de ce site. Néanmoins, Anais Chesnel et
              ses employés ne seront pas tenus responsables de tout problème
              découlant de toute utilisation irrégulière de ce site.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Indemnité</strong>
            </p>{" "}
            <p className="condition">
              En tant qu’utilisateur, vous indemnisez par les présentes Anais
              Chesnel de toute responsabilité, de tout coût, de toute cause
              d’action, de tout dommage ou de toute dépense découlant de votre
              utilisation de ce site ou de votre violation de l’une des
              dispositions énoncées dans le présent document.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Lois applicables</strong>
            </p>{" "}
            <p className="condition">
              Ce document est soumis aux lois applicables en France et vise à se
              conformer à ses règles et règlements nécessaires. Cela inclut la
              réglementation à l’échelle de l’UE énoncée dans le RGPD.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Divisibilité</strong>
            </p>{" "}
            <p className="condition">
              Si, à tout moment, l’une des dispositions énoncées dans le présent
              document est jugée incompatible ou invalide en vertu des lois
              applicables, ces dispositions seront considérées comme nulles et
              seront retirées du présent document. Toutes les autres
              dispositions ne seront pas touchées par les lois et le reste du
              document sera toujours considéré comme valide.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Modifications</strong>
            </p>{" "}
            <p className="condition">
              Ces conditions générales peuvent être modifiées de temps à autre
              afin de maintenir le respect de la loi et de refléter tout
              changement à la façon dont nous gérons notre site et la façon dont
              nous nous attendons à ce que les utilisateurs se comportent sur
              notre site. Nous recommandons à nos utilisateurs de vérifier ces
              conditions générales de temps à autre pour s’assurer qu’ils sont
              informés de toute mise à jour. Au besoin, nous informerons les
              utilisateurs par courriel des changements apportés à ces
              conditions ou nous afficherons un avis sur notre site.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Contact</strong>
            </p>{" "}
            <p className="condition">
              Veuillez communiquer avec nous si vous avez des questions ou des
              préoccupations. Nos coordonnées sont les suivantes :
              admin@4brn.com
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <i>Date d'entrée en vigueur : le 2 août 2021.</i>
            </p>{" "}
            <p className="title">POLITIQUE DE CONFIDENTIALITÉ</p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Le but de cette politique de confidentialité</strong>
            </p>
            <p className="condition">
              Le but de cette politique de confidentialité est d'informer les
              utilisateurs de notre site des données personnelles que nous
              recueillerons ainsi que les informations suivantes, le cas échéant
              :
              <ul>
                <li>Les données personnelles que nous recueillerons</li>
                <li>L’utilisation des données recueillies</li>
                <li>Qui a accès aux données recueillies</li>
                <li>Les droits des utilisateurs du site</li>
                <li>La politique de cookies du site</li>
              </ul>
              Cette politique de confidentialité fonctionne parallèlement aux
              conditions générales d’utilisation de notre site.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Lois applicables</strong>
            </p>
            <p className="condition">
              Conformément au Règlement général sur la protection des données
              (RGPD), cette politique de confidentialité est conforme aux
              règlements suivants.
              <br />
              Les données à caractère personnel doivent être :
              <ol>
                <li>
                  {" "}
                  traitées de manière licite, loyale et transparente au regard
                  de la personne concernée (licéité, loyauté, transparence) ;
                </li>
                <li>
                  collectées pour des finalités déterminées, explicites et
                  légitimes, et ne pas être traitées ultérieurement d'une
                  manière incompatible avec ces finalités; le traitement
                  ultérieur à des fins archivistiques dans l'intérêt public, à
                  des fins de recherche scientifique ou historique ou à des fins
                  statistiques n'est pas considéré, conformément à l'article 89,
                  paragraphe 1, comme incompatible avec les finalités initiales
                  (limitation des finalités) ;
                </li>
                <li>
                  adéquates, pertinentes et limitées à ce qui est nécessaire au
                  regard des finalités pour lesquelles elles sont traitées
                  (minimisation des données) ;
                </li>
                <li>
                  exactes et, si nécessaire, tenues à jour; toutes les mesures
                  raisonnables doivent être prises pour que les données à
                  caractère personnel qui sont inexactes, eu égard aux finalités
                  pour lesquelles elles sont traitées, soient effacées ou
                  rectifiées sans tarder (exactitude) ;
                </li>
                <li>
                  conservées sous une forme permettant l'identification des
                  personnes concernées pendant une durée n'excédant pas celle
                  nécessaire au regard des finalités pour lesquelles elles sont
                  traitées; les données à caractère personnel peuvent être
                  conservées pour des durées plus longues dans la mesure où
                  elles seront traitées exclusivement à des fins archivistiques
                  dans l'intérêt public, à des fins de recherche scientifique ou
                  historique ou à des fins statistiques conformément à l'article
                  89, paragraphe 1, pour autant que soient mises en œuvre les
                  mesures techniques et organisationnelles appropriées requises
                  par le règlement afin de garantir les droits et libertés de la
                  personne concernée (limitation de la conservation) ;
                </li>
                <li>
                  traitées de façon à garantir une sécurité appropriée des
                  données à caractère personnel, y compris la protection contre
                  le traitement non autorisé ou illicite et contre la perte, la
                  destruction ou les dégâts d'origine accidentelle, à l'aide de
                  mesures techniques ou organisationnelles appropriées
                  (intégrité et confidentialité).
                </li>
              </ol>{" "}
              Le traitement n'est licite que si, et dans la mesure où, au moins
              une des conditions suivantes est remplie :
              <ol>
                <li>
                  la personne concernée a consenti au traitement de ses données
                  à caractère personnel pour une ou plusieurs finalités
                  spécifiques ;
                </li>
                <li>
                  le traitement est nécessaire à l'exécution d'un contrat auquel
                  la personne concernée est partie ou à l'exécution de mesures
                  précontractuelles prises à la demande de celle-ci ;
                </li>
                <li>
                  le traitement est nécessaire au respect d'une obligation
                  légale à laquelle le responsable du traitement est soumis{" "}
                </li>
                <li>
                  . le traitement est nécessaire à la sauvegarde des intérêts
                  vitaux de la personne concernée ou d'une autre personne
                  physique ;
                </li>
                <li>
                  le traitement est nécessaire à l'exécution d'une mission
                  d'intérêt public ou relevant de l'exercice de l'autorité
                  publique dont est investi le responsable du traitement ;
                </li>
                <li>
                  le traitement est nécessaire aux fins des intérêts légitimes
                  poursuivis par le responsable du traitement ou par un tiers, à
                  moins que ne prévalent les intérêts ou les libertés et droits
                  fondamentaux de la personne concernée qui exigent une
                  protection des données à caractère personnel, notamment
                  lorsque la personne concernée est un enfant.
                </li>
              </ol>
              Pour les résidents de l’État de Californie, cette politique de
              confidentialité vise à se conformer à la California Consumer
              Privacy Act (CCPA). S’il y a des incohérences entre ce document et
              la CCPA, la législation de l’État s’appliquera. Si nous constatons
              des incohérences, nous modifierons notre politique pour nous
              conformer à la loi pertinente.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Consentement</strong>
            </p>
            <p className="condition">
              Les utilisateurs conviennent qu’en utilisant notre site, ils
              consentent à :
            </p>
            <p className="condition">
              <ul>
                <li>
                  {" "}
                  les conditions énoncées dans la présente politique de
                  confidentialité et
                </li>
                <li>
                  la collecte, l’utilisation et la conservation des données
                  énumérées dans la présente politique
                </li>
              </ul>{" "}
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Données personnelles que nous collectons</strong>
            </p>
            <p className="condition">
              Données collectées automatiquement <br />
              Nous ne collectons aucune donnée automatiquement sur notre site.
            </p>
            <p className="condition">
              Données recueillies de façon non automatique <br /> Nous pouvons
              également collecter les données suivantes lorsque vous effectuez
              certaines fonctions sur notre site :
            </p>{" "}
            <p className="condition">
              <ul>
                <li>Prénom et nom</li>
                <li>Date de naissance</li>
                <li>Email</li>
              </ul>
            </p>{" "}
            <p className="condition">
              Ces données peuvent être recueillies au moyen des méthodes
              suivantes : <br /> Remplissage base de données
            </p>{" "}
            <p className="condition">
              Veuillez noter que nous ne collectons que les données qui nous
              aident à atteindre l’objectif énoncé dans cette politique de
              confidentialité. Nous ne recueillerons pas de données
              supplémentaires sans vous en informer au préalable.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Comment nous utilisons les données personnelles</strong>
            </p>{" "}
            <p className="condition">
              Les données personnelles recueillies sur notre site seront
              utilisées uniquement aux fins précisées dans la présente politique
              ou indiquées sur les pages pertinentes de notre site. Nous
              n’utiliserons pas vos données au-delà de ce que nous divulguerons.
            </p>
            <p className="condition">
              Les données que nous recueillons lorsque l’utilisateur exécute
              certaines fonctions peuvent être utilisées aux fins suivantes :
              Création compte utilisateur
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Avec qui nous partageons les données personnelles</strong>
            </p>{" "}
            <p className="condition">
              Employés
              <br />
              Nous pouvons divulguer à tout membre de notre organisation les
              données utilisateur dont il a raisonnablement besoin pour réaliser
              les objectifs énoncés dans la présente politique.
            </p>
            <p className="condition">
              Tierces parties <br />
              Nous pouvons partager les données utilisateur avec les tiers
              suivants : Nous pouvons partager les données utilisateur avec des
              tiers aux fins suivantes :
            </p>
            <p className="condition">
              Les tiers ne seront pas en mesure d’accéder aux données des
              utilisateurs au-delà de ce qui est raisonnablement nécessaire pour
              atteindre l’objectif donné.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Autres divulgations</strong>
            </p>{" "}
            <p className="condition">
              Nous nous engageons à ne pas vendre ou partager vos données avec
              des tiers, sauf dans les cas suivants :
              <ul>
                <li>si la loi l'exige</li>
                <li>si elle est requise pour toute procédure judiciaire</li>
                <li>pour prouver ou protéger nos droits légaux</li>
                <li>
                  à des acheteurs ou des acheteurs potentiels de cette société
                  dans le cas où nous cherchons à la vendre la société
                </li>
              </ul>
              Si vous suivez des hyperliens de notre site vers un autre site,
              veuillez noter que nous ne sommes pas responsables et n’avons pas
              de contrôle sur leurs politiques et pratiques de confidentialité.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>
                Combien de temps nous stockons les données personnelles
              </strong>
            </p>{" "}
            <p className="condition">
              Nous ne conservons pas les données des utilisateurs au-delà de ce
              qui est nécessaire pour atteindre les fins pour lesquelles elles
              sont recueillies.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Comment nous protégeons vos données personnelles</strong>
            </p>{" "}
            <p className="condition">
              Toutes les données stockées sont conversées dans une base de
              données sécurisées uniquement accessible par les administrateurs
              de 4B. Les données échangées entre le Back et le Front sont
              protégées par un protocole HTPPS, et des routes sécurisées Alors
              que nous prenons toutes les précautions raisonnables pour nous
              assurer que nos données d’utilisateur sont sécurisées et que les
              utilisateurs sont protégés, il reste toujours du risque de
              préjudice. L’Internet en sa totalité peut être, parfois, peu sûr
              et donc nous sommes incapables de garantir la sécurité des données
              des utilisateurs au-delà de ce qui est raisonnablement pratique.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              Mineurs
            </p>{" "}
            <p className="condition">
              Le RGPD précise que les personnes de moins de 15 ans sont
              considérées comme des mineurs aux fins de la collecte de données.
              Les mineurs doivent avoir le consentement d’un représentant légal
              pour que leurs données soient recueillies, traitées et utilisées.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              Vos droits en tant qu’utilisateur
            </p>{" "}
            <p className="condition">
              En vertu du RGPD, les utilisateurs ont les droits suivants en tant
              que personnes concernées :
              <ul>
                <li>droit d’accès</li>
                <li>droit de rectification</li>
                <li>droit à l’effacemen</li>
                <li>droit de restreindre le traitement</li>
                <li>droit à la portabilité des données</li>
                <li>droit d'objection</li>
              </ul>
              Vous trouverez de plus amples informations sur ces droits au
              chapitre 3 (art 12-23) du RGPD.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              Comment modifier, supprimer ou contester les données recueillies
            </p>{" "}
            <p className="condition">
              Si vous souhaitez que vos renseignements soient supprimés ou
              modifiés d’une façon ou d’une autre, veuillez communiquer avec
              notre agent de protection de la vie privée ici :
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              Modifications
            </p>{" "}
            <p className="condition">
              Cette politique de confidentialité peut être modifiée à l’occasion
              afin de maintenir la conformité avec la loi et de tenir compte de
              tout changement à notre processus de collecte de données. Nous
              recommandons à nos utilisateurs de vérifier notre politique de
              temps à autre pour s’assurer qu’ils soient informés de toute mise
              à jour. Au besoin, nous pouvons informer les utilisateurs par
              courriel des changements apportés à cette politique.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              Contact
            </p>{" "}
            <p className="condition">
              Si vous avez des questions à nous poser, n’hésitez pas à
              communiquer avec nous en utilisant ce qui suit : admin@4brn.com
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <i>Date d'entrée en vigueur : le 2 août 2021.</i>
            </p>{" "}
          </>
        )}
        {this.props.lang && this.props.lang.value === "en" && (
          <>
            <p className="title">Terms of Service</p>
            <p className="condition">
              These general conditions govern the use of this website
              www.4bpremium.com.
              <br />
              This site is owned and operated by Anais Chesnel By using this
              site, you indicate that you have read and understood the terms of
              use and that you agree to abide by them at all times.
            </p>
            <p className="condition">Type of site: Motivation site</p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Intellectual property</strong>
            </p>
            <p className="condition">
              All content published and made available on this site is the
              property of Anais Chesnel and its creators. This includes, but is
              not limited to images, text, logos, documents, downloadable files
              and anything that contributes to the composition of this site.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Account</strong>
            </p>
            <p className="condition">
              When you create an account on our site, you agree to the
              following:
              <ol>
                <li>
                  {" "}
                  that you are solely responsible for your account and the
                  security and confidentiality of your account, including any
                  passwords or sensitive information attached to such account,
                  and
                </li>
                <li>
                  that all personal information you provide to us through your
                  account is current, accurate and truthful and that you will
                  update your personal information if it changes.
                </li>
              </ol>{" "}
              We reserve the right to suspend or terminate your account if you
              use our site illegally or violate the Terms of Acceptable Use.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Sales of goods and services</strong>
            </p>
            <p className="condition">
              This document governs the sale of the services made available on
              our site.
            </p>
            <p className="condition">
              The services we offer include:
              <ul>
                <li>
                  Tip: The services linked to this document are the services
                  that are displayed on our site at the time you access it. All
                  information, descriptions or images that we provide about our
                  services are described and presented with the greatest
                  possible accuracy. However, we are not legally bound by such
                  information, descriptions or images as we cannot guarantee the
                  accuracy of every product or service we provide. You agree to
                  purchase these services at your own risk.
                </li>
              </ul>{" "}
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Payments</strong>
            </p>
            <p className="condition">
              We accept the following payment methods on this site:
              <ul>
                <li>
                  Credit card: When you provide us with your payment
                  information, you confirm to us that you have authorized the
                  use of and access to the payment instrument you have chosen to
                  use. By providing us with your payment details, you confirm
                  that you authorize us to charge the amount due to this payment
                  instrument. If we believe that your payment has violated any
                  law or any of our Terms of Use, we reserve the right to cancel
                  your transaction.
                </li>
              </ul>{" "}
            </p>
            <p className="condition">Services </p>{" "}
            <p className="condition">
              The services will be invoiced in full when the service is ordered.
            </p>{" "}
            <p className="condition">Subscriptions </p>{" "}
            <p className="condition">
              All of our recurring subscriptions will be automatically billed
              and renewed until we receive notice that you wish to cancel the
              subscription.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Limitation of Liability</strong>
            </p>{" "}
            <p className="condition">
              Anais Chesnel or one of its employees will be held responsible for
              any problem arising from this site. Nevertheless, Anais Chesnel
              and its employees will not be held responsible for any problem
              arising from any irregular use of this site.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Indemnity</strong>
            </p>{" "}
            <p className="condition">
              As a user, you hereby indemnify Anais Chesnel from any and all
              liability, costs, causes of action, damages or expenses arising
              out of your use of this site or your breach of any of the
              provisions set out in this document.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Applicable laws</strong>
            </p>{" "}
            <p className="condition">
              This document is subject to the laws applicable in France and aims
              to comply with its necessary rules and regulations. This includes
              the EU-wide regulations set out in the GDPR.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Divisibility</strong>
            </p>{" "}
            <p className="condition">
              If at any time any of the provisions set forth herein are held to
              be inconsistent or invalid under applicable law, such provisions
              shall be deemed void and shall be severed from this document. All
              other provisions will not be affected by law and the rest of the
              document will still be considered valid.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Amendments</strong>
            </p>{" "}
            <p className="condition">
              These terms and conditions may be amended from time to time to
              maintain compliance with the law and to reflect any changes to the
              way we run our site and the way we expect users to behave on our
              site. We recommend that our users check these terms and conditions
              from time to time to ensure that they are aware of any updates. If
              necessary, we will notify users by email of changes to these terms
              or we will post a notice on our site.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Contact</strong>
            </p>{" "}
            <p className="condition">
              Please contact us if you have any questions or concerns. Our
              contact details are as follows: admin@4brn.com
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <i>Effective date: August 2, 2021.</i>
            </p>{" "}
            <p className="title">PRIVACY POLICY</p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>The purpose of this privacy policy</strong>
            </p>
            <p className="condition">
              The purpose of this privacy policy is to inform users of our site
              of the personal data that we will collect and the following
              information, where applicable: :
              <ul>
                <li>The personal data we will collect</li>
                <li>Use of collected data</li>
                <li>Who has access to the data collected</li>
                <li>Site user rights</li>
                <li>The site&#39;s cookie policy</li>
              </ul>
              This Privacy Policy operates in conjunction with our Site Terms of
              Service.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Applicable laws</strong>
            </p>
            <p className="condition">
              In accordance with the General Data Protection Regulation (GDPR),
              this privacy policy complies with the following regulations.
              <br />
              Personal data must be:
              <ol>
                <li>
                  processed in a lawful, fair and transparent manner with regard
                  to the data subject (lawfulness, fairness, transparency);
                </li>
                <li>
                  collected for specified, explicit and legitimate purposes, and
                  not further processed in a manner incompatible with those
                  purposes; further processing for archival purposes in the
                  public interest, for scientific or historical research
                  purposes or for statistical purposes is not considered, in
                  accordance with Article 89(1), to be incompatible with the
                  initial purposes (limitation purposes);
                </li>
                <li>
                  adequate, relevant and limited to what is necessary in
                  relation to the purposes for which they are processed (data
                  minimization);
                </li>
                <li>
                  accurate and, where necessary, kept up to date; all reasonable
                  steps must be taken to ensure that personal data which are
                  inaccurate, having regard to the purposes for which they are
                  processed, are erased or rectified without delay (accuracy);
                </li>
                <li>
                  kept in a form allowing the identification of the persons
                  concerned for a period not exceeding that necessary with
                  regard to the purposes for which they are processed; personal
                  data may be stored for longer periods insofar as they will be
                  processed exclusively for archival purposes in the public
                  interest, for scientific or historical research purposes or
                  for statistical purposes in accordance with Article 89 ,
                  paragraph 1, provided that the appropriate technical and
                  organizational measures required by the Regulation are
                  implemented in order to guarantee the rights and freedoms of
                  the data subject (limitation of storage);
                </li>
                <li>
                  processed in such a way as to ensure appropriate security of
                  personal data, including protection against unauthorized or
                  unlawful processing and against accidental loss, destruction
                  or damage, using appropriate technical or organizational
                  measures (integrity and confidentiality).
                </li>
              </ol>{" "}
              Processing is only lawful if and insofar as at least one of the
              following conditions is met:
              <ol>
                <li>
                  the data subject has consented to the processing of their
                  personal data for one or more specific purposes;
                </li>
                <li>
                  the processing is necessary for the performance of a contract
                  to which the data subject is a party or for the performance of
                  pre-contractual measures taken at the latter&#39;s request;
                </li>
                <li>
                  processing is necessary for compliance with a legal obligation
                  to which the controller is subject
                </li>
                <li>
                  the processing is necessary to protect the vital interests of
                  the data subject or of another natural person;
                </li>
                <li>
                  processing is necessary for the purposes of the legitimate
                  interests pursued by the controller or by a third party,
                  unless the interests or fundamental rights and freedoms of the
                  data subject which require protection of personal data
                  prevail, in particular where the person concerned is a child.
                </li>
                <li>
                  processing is necessary for the purposes of the legitimate
                  interests pursued by the controller or by a third party,
                  unless the interests or fundamental rights and freedoms of the
                  data subject which require protection of personal data
                  prevail, in particular where the person concerned is a child.
                </li>
              </ol>
              For residents of the State of California, this Privacy Policy is
              intended to comply with the California Consumer Privacy Act
              (CCPA). If there are any inconsistencies between this document and
              the CCPA, state law will apply. If we find any inconsistencies, we
              will modify our policy to comply with the relevant law.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Consent</strong>
            </p>
            <p className="condition">
              Users agree that by using our site, they consent to:
            </p>
            <p className="condition">
              <ul>
                <li> the terms set out in this Privacy Policy and</li>
                <li>
                  the collection, use and retention of the data listed in this
                  policy
                </li>
              </ul>{" "}
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Personal data we collect</strong>
            </p>
            <p className="condition">
              Data Collected Automatically <br />
              We do not collect any data automatically on our site.
            </p>
            <p className="condition">
              Data collected non-automatically <br />
              We may also collect the following data when you perform certain
              functions on our site:
            </p>{" "}
            <p className="condition">
              <ul>
                <li>First and last name</li>
                <li>Date of Birth</li>
                <li>E-mail</li>
              </ul>
            </p>{" "}
            <p className="condition">
              This data may be collected using the following methods: <br />{" "}
              Database filling
            </p>{" "}
            <p className="condition">
              Please note that we only collect data that helps us achieve the
              purpose set out in this privacy policy. We will not collect
              additional data without informing you first.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>How we use personal data</strong>
            </p>{" "}
            <p className="condition">
              Personal data collected on our site will only be used for the
              purposes specified in this policy or indicated on the relevant
              pages of our site. We will not use your data beyond what we
              disclose.
            </p>
            <p className="condition">
              The data we collect when the user performs certain functions can
              be used for the following purposes: Creation of user account
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>With whom we share personal data</strong>
            </p>{" "}
            <p className="condition">
              Employees
              <br />
              We may disclose to any member of our organization such User Data
              as they reasonably need to fulfill the purposes set out in this
              policy.
            </p>
            <p className="condition">
              Third parties <br />
              We may share User Data with the following third parties: We may
              share User Data with third parties for the following purposes:
            </p>
            <p className="condition">
              Third parties will not be able to access user data beyond what is
              reasonably necessary to fulfill the given purpose.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Other Disclosures</strong>
            </p>{" "}
            <p className="condition">
              We undertake not to sell or share your data with third parties,
              except in the following cases:
              <ul>
                <li>if required by law</li>
                <li>if it is required for any legal proceedings</li>
                <li>to prove or protect our legal rights</li>
                <li>
                  to buyers or potential buyers of this company in the event
                  that we seek to sell the company
                </li>
              </ul>
              If you follow hyperlinks from our site to another site, please
              note that we are not responsible for and have no control over
              their privacy policies and practices.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>How long we store personal data</strong>
            </p>{" "}
            <p className="condition">
              We do not retain user data beyond what is necessary to fulfill the
              purposes for which it is collected.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>How we protect your personal data</strong>
            </p>{" "}
            <p className="condition">
              All stored data is conversed in a secure database only accessible
              by 4B administrators. The data exchanged between the Back and the
              Front is protected by an HTTPS protocol, and secure routes While
              we take all reasonable precautions to ensure that our user data is
              secure and that users are protected, there is always some risk of
              harm. The Internet as a whole can be insecure at times and
              therefore we are unable to guarantee the security of user data
              beyond what is reasonably practical.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              Minors
            </p>{" "}
            <p className="condition">
              The GDPR specifies that persons under the age of 15 are considered
              minors for the purposes of data collection. Minors must have the
              consent of a legal representative for their data to be collected,
              processed and used.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              Your rights as a user
            </p>{" "}
            <p className="condition">
              Under the GDPR, users have the following rights as data subjects:
              <ul>
                <li>permission to access</li>
                <li>right of rectification</li>
                <li>right to erasure</li>
                <li>right to restrict processing</li>
                <li>right to data portability</li>
                <li>right to object</li>
              </ul>
              You will find more information on these rights in Chapter 3 (art
              12-23) of the GDPR.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              How to modify, delete or dispute the data collected
            </p>{" "}
            <p className="condition">
              If you would like your information deleted or otherwise amended,
              please contact our Privacy Officer here:
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              Amendments
            </p>{" "}
            <p className="condition">
              This Privacy Policy may be amended from time to time to maintain
              compliance with the law and to reflect any changes to our data
              collection process. We recommend that our users check our policy
              from time to time to ensure that they are aware of any updates. If
              necessary, we may notify users by email of changes to this policy.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              Contact
            </p>{" "}
            <p className="condition">
              If you have any questions for us, please feel free to contact us
              using the following: admin@4brn.com
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <i>Effective date: August 2, 2021.</i>
            </p>{" "}
          </>
        )}
        {this.props.lang && this.props.lang.value === "es" && (
          <>
            <p className="title">Términos de servicio</p>
            <p className="condition">
              Las presentes condiciones generales rigen el uso de este sitio web
              www.4bpremium.com.
              <br />
              Este sitio es propiedad y está operado por Anais Chesnel. Al usar
              este sitio, usted indica que ha leído y entendido los términos de
              uso y que acepta cumplirlos en todo momento.
            </p>
            <p className="condition">Tipo de sitio: sitio de motivación</p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Propiedad intelectual</strong>
            </p>
            <p className="condition">
              Todo el contenido publicado y disponible en este sitio es
              propiedad de Anais Chesnel y sus creadores. Esto incluye, entre
              otros, imágenes, texto, logotipos, documentos, archivos
              descargables y cualquier cosa que contribuya a la composición de
              este sitio.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Cuenta</strong>
            </p>
            <p className="condition">
              Cuando crea una cuenta en nuestro sitio, acepta lo siguiente:
              <ol>
                <li>
                  {" "}
                  que usted es el único responsable de su cuenta y de la
                  seguridad y confidencialidad de su cuenta, incluidas las
                  contraseñas o la información confidencial adjunta a dicha
                  cuenta, y
                </li>
                <li>
                  que toda la información personal que nos proporciona a través
                  de su cuenta es actual, precisa y veraz y que actualizará su
                  información personal si cambia.
                </li>
              </ol>{" "}
              Nos reservamos el derecho de suspender o cancelar su cuenta si usa
              nuestro sitio ilegalmente o viola los Términos de uso aceptable.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Ventas de bienes y servicios</strong>
            </p>
            <p className="condition">
              Este documento rige la venta de los servicios disponibles en
              nuestro sitio.
            </p>
            <p className="condition">
              Los servicios que ofrecemos incluyen:
              <ul>
                <li>
                  Sugerencia: Los servicios vinculados a este documento son los
                  servicios que se muestran en nuestro sitio en el momento en
                  que accede a él. Toda la información, descripciones o imágenes
                  que proporcionamos sobre nuestros servicios se describen y
                  presentan con la mayor precisión posible. Sin embargo, no
                  estamos obligados legalmente por dicha información,
                  descripciones o imágenes, ya 2 que no podemos garantizar la
                  precisión de cada producto o servicio que brindamos. Usted
                  acepta comprar estos servicios bajo su propio riesgo.
                </li>
              </ul>{" "}
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Pagos</strong>
            </p>
            <p className="condition">
              Aceptamos los siguientes métodos de pago en este sitio:
              <ul>
                <li>
                  Tarjeta de crédito: cuando nos proporciona su información de
                  pago, nos confirma que ha autorizado el uso y el acceso al
                  instrumento de pago que ha elegido utilizar. Al
                  proporcionarnos sus detalles de pago, confirma que nos
                  autoriza a cobrar el monto adeudado a este instrumento de
                  pago. Si creemos que su pago ha violado alguna ley o
                  cualquiera de nuestros términos de servicio, nos reservamos el
                  derecho de cancelar su transacción.
                </li>
              </ul>{" "}
            </p>
            <p className="condition">Servicios </p>{" "}
            <p className="condition">
              Los servicios se facturarán en su totalidad cuando se solicite el
              servicio.
            </p>{" "}
            <p className="condition">Subscriptions </p>{" "}
            <p className="condition">
              Todas nuestras suscripciones recurrentes se facturarán y renovarán
              automáticamente hasta que recibamos un aviso de que desea cancelar
              la suscripción.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Limitación de responsabilidad</strong>
            </p>{" "}
            <p className="condition">
              Anais Chesnel o uno de sus empleados será responsable de cualquier
              problema que surja de este sitio. No obstante, Anais Chesnel y sus
              empleados no serán responsables de ningún problema derivado del
              uso irregular de este sitio.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Indemnidad</strong>
            </p>{" "}
            <p className="condition">
              Como usuario, por la presente exime a Anais Chesnel de cualquier
              responsabilidad, costo, causa de acción, daño o gasto que surja
              del uso de este sitio o de la violación de cualquiera de las
              disposiciones establecidas en este documento.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Leyes aplicables</strong>
            </p>{" "}
            <p className="condition">
              Este documento está sujeto a las leyes aplicables en Francia y
              tiene como objetivo cumplir con sus normas y reglamentos
              necesarios. Esto incluye las regulaciones de toda la UE
              establecidas en el RGPD.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Divisibilidad</strong>
            </p>{" "}
            <p className="condition">
              Si en algún momento cualquiera de las disposiciones establecidas
              en este documento se considera inconsistente o inválida según la
              ley aplicable, dichas disposiciones se considerarán nulas y se
              eliminarán de este documento. Todas las demás disposiciones no se
              verán afectadas por la ley y el resto del documento se seguirá
              considerando válido.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Enmiendas</strong>
            </p>{" "}
            <p className="condition">
              Estos términos y condiciones pueden modificarse de vez en cuando
              para mantener el cumplimiento de la ley y para reflejar cualquier
              cambio en la forma en que administramos nuestro sitio y la forma
              en que esperamos que los usuarios se comporten en nuestro sitio.
              Recomendamos que nuestros usuarios revisen estos términos y
              condiciones de vez en cuando para asegurarse de que estén al tanto
              de cualquier actualización. Si es necesario, notificaremos a los
              usuarios por correo electrónico sobre los cambios en estos
              términos o publicaremos un aviso en nuestro sitio.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Contactar</strong>
            </p>{" "}
            <p className="condition">
              Póngase en contacto con nosotros si tiene alguna pregunta o
              inquietud. Nuestros datos de contacto son los siguientes:
              admin@4brn.com
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <i>Fecha de vigencia: 2 de agosto de 2021.</i>
            </p>{" "}
            <p className="title">POLÍTICA DE CONFIDENCIALIDAD</p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>El propósito de esta política de privacidad</strong>
            </p>
            <p className="condition">
              El propósito de esta política de privacidad es informar a los
              usuarios de nuestro sitio sobre los datos personales que
              recopilaremos y la siguiente información, cuando corresponda:
              <ul>
                <li>Los datos personales que recopilaremos</li>
                <li>Uso de los datos recopilados</li>
                <li>Derechos de usuario del sitio</li>
                <li>Quién tiene acceso a los datos recopilados</li>
                <li>La política de cookies del sitio</li>
              </ul>
              Esta Política de privacidad opera en conjunto con los Términos de
              servicio de nuestro sitio.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Leyes aplicables</strong>
            </p>
            <p className="condition">
              De acuerdo con el Reglamento General de Protección de Datos
              (RGPD), esta política de privacidad cumple con las siguientes
              normas.
              <br />
              Los datos personales deben ser:
              <ol>
                <li>
                  tratados de manera lícita, leal y transparente con respecto al
                  interesado (licitud, lealtad, transparencia);
                </li>
                <li>
                  recopilados para fines específicos, explícitos y legítimos, y
                  no procesados ​​de manera incompatible con esos fines; el
                  tratamiento posterior con fines de archivo en interés público,
                  con fines de investigación científica o histórica o con fines
                  estadísticos, de conformidad con el artículo 89, apartado 1,
                  no se considera incompatible con los fines iniciales (fines de
                  limitación);
                </li>
                <li>
                  adecuados, pertinentes y limitados a lo necesario en relación
                  con los fines para los que son tratados (minimización de
                  datos);
                </li>
                <li>
                  precisa y, cuando sea necesario, actualizada; se deben tomar
                  todas las medidas razonables para garantizar que los datos
                  personales que sean inexactos, teniendo en cuenta los fines
                  para los que se procesan, se supriman o rectifiquen sin demora
                  (exactitud);
                </li>
                <li>
                  mantenidos en un formulario que permita la identificación de
                  las personas en cuestión por un período que no exceda el
                  necesario con respecto a los fines para los cuales se
                  procesan; los datos personales pueden almacenarse durante
                  períodos más largos en la medida en que se procesarán
                  exclusivamente con fines de archivo en interés público, con
                  fines de investigación científica o histórica o con fines
                  estadísticos de conformidad con el artículo 89, párrafo 1,
                  siempre que se tomen las medidas técnicas y organizativas
                  apropiadas. requeridos por el Reglamento se implementan para
                  garantizar los derechos y libertades del interesado
                  (limitación del almacenamiento);
                </li>
                <li>
                  procesados ​​de tal manera que garanticen la seguridad
                  adecuada de los datos personales, incluida la protección
                  contra el procesamiento no autorizado o ilegal y contra la
                  pérdida, destrucción o daño accidental, utilizando medidas
                  técnicas u organizativas apropiadas (integridad y
                  confidencialidad).
                </li>
              </ol>{" "}
              El procesamiento solo es lícito si y en la medida en que se cumpla
              al menos una de las siguientes condiciones:
              <ol>
                <li>
                  el interesado ha dado su consentimiento para el tratamiento de
                  sus datos personales para uno o varios fines específicos;
                </li>
                <li>
                  el tratamiento es necesario para la ejecución de un contrato
                  en el que el interesado es parte o para la ejecución de
                  medidas precontractuales adoptadas a petición de este último;
                </li>
                <li>
                  el tratamiento es necesario para el cumplimiento de una
                  obligación legal a la que está sujeto el responsable del
                  tratamiento
                </li>
                <li>
                  el tratamiento es necesario para proteger intereses vitales
                  del interesado o de otra persona física;
                </li>
                <li>
                  el procesamiento es necesario para la realización de una tarea
                  de interés público o en el ejercicio de la autoridad oficial
                  conferida al controlador;
                </li>
                <li>
                  el tratamiento es necesario para los intereses legítimos
                  perseguidos por el responsable del tratamiento o por un
                  tercero, a menos que prevalezcan los intereses o los derechos
                  y libertades fundamentales del interesado que requieran la
                  protección de los datos personales, en particular cuando el
                  interesado sea un niño.
                </li>
              </ol>
              Para los residentes del Estado de California, esta Política de
              Privacidad está destinada a cumplir con la Ley de Privacidad del
              Consumidor de California (CCPA). Si hay alguna inconsistencia
              entre este documento y la CCPA, se aplicará la ley estatal. Si
              encontramos alguna inconsistencia, modificaremos nuestra política
              para cumplir con la ley pertinente.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Consentimiento</strong>
            </p>
            <p className="condition">
              Los usuarios aceptan que al usar nuestro sitio, dan su
              consentimiento para:
            </p>
            <p className="condition">
              <ul>
                <li>
                  {" "}
                  los términos establecidos en esta Política de Privacidad y
                </li>
                <li>
                  la recopilación, el uso y la retención de los datos enumerados
                  en esta políticas
                </li>
              </ul>{" "}
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Datos personales que recopilamos</strong>
            </p>
            <p className="condition">
              Datos recopilados automáticamente <br />
              No recopilamos ningún dato automáticamente en nuestro sitio.
            </p>
            <p className="condition">
              Datos recopilados de forma no automática <br />
              También podemos recopilar los siguientes datos cuando realiza
              ciertas funciones en nuestro sitio:
            </p>{" "}
            <p className="condition">
              <ul>
                <li>Nombre y apellido</li>
                <li>Fecha de nacimiento</li>
                <li>Correo electrónico</li>
              </ul>
            </p>{" "}
            <p className="condition">
              Estos datos pueden recopilarse utilizando los siguientes métodos:{" "}
              <br /> relleno de base de datos
            </p>{" "}
            <p className="condition">
              Tenga en cuenta que solo recopilamos datos que nos ayudan a lograr
              el propósito establecido en esta política de privacidad. No
              recopilaremos datos adicionales sin informarle primero.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Cómo usamos los datos personales</strong>
            </p>{" "}
            <p className="condition">
              Los datos personales recopilados en nuestro sitio solo se
              utilizarán para los fines especificados en esta política o
              indicados en las páginas relevantes de nuestro sitio. No
              utilizaremos sus datos más allá de lo que divulgamos.
            </p>
            <p className="condition">
              Los datos que recabamos cuando el usuario realiza determinadas
              funciones pueden ser utilizados para las siguientes finalidades:
              Creación de cuenta de usuario
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Con quién compartimos datos personales</strong>
            </p>{" "}
            <p className="condition">
              Empleados
              <br />
              Podemos divulgar a cualquier miembro de nuestra organización los
              Datos de usuario que razonablemente necesiten para cumplir con los
              propósitos establecidos en esta política.
            </p>
            <p className="condition">
              Terceros <br />
              Podemos compartir Datos de usuario con los siguientes terceros:
              Podemos compartir Datos de usuario con terceros para los
              siguientes fines:
            </p>
            <p className="condition">
              Los terceros no podrán acceder a los datos de los usuarios más
              allá de lo razonablemente necesario para cumplir con la finalidad
              dada.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Otras divulgaciones</strong>
            </p>{" "}
            <p className="condition">
              Otras divulgaciones
              <ul>
                <li>si lo requiere la ley</li>
                <li>si es necesario para cualquier procedimiento legal</li>
                <li>para probar o proteger nuestros derechos legales</li>
                <li>
                  a compradores o posibles compradores de esta empresa en caso
                  de que intentemos vender la empresa
                </li>
              </ul>
              Si sigue los hipervínculos de nuestro sitio a otro sitio, tenga en
              cuenta que no somos responsables ni tenemos control sobre sus
              políticas y prácticas de privacidad.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Cuánto tiempo almacenamos datos personales</strong>
            </p>{" "}
            <p className="condition">
              No conservamos los datos de los usuarios más allá de lo necesario
              para cumplir con los fines para los que se recopilan.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <strong>Cómo protegemos sus datos personales</strong>
            </p>{" "}
            <p className="condition">
              Todos los datos almacenados se almacenan en una base de datos
              segura a la que solo pueden acceder los administradores de 4B. Los
              datos intercambiados entre el reverso y el frente están protegidos
              por un protocolo HTTPS y rutas seguras. Si bien tomamos todas las
              precauciones razonables para garantizar que nuestros datos de
              usuario estén seguros y que los usuarios estén protegidos, siempre
              existe algún riesgo de daño. Internet en su conjunto puede ser
              inseguro a veces y, por lo tanto, no podemos garantizar la
              seguridad de los datos del usuario más allá de lo razonablemente
              práctico.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              menores
            </p>{" "}
            <p className="condition">
              El RGPD aclara que las personas menores de 15 años se consideran
              menores a efectos de la recogida de datos. Los menores de edad
              deben contar con el consentimiento de un representante legal para
              la recolección, tratamiento y uso de sus datos.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              Tus derechos como usuario
            </p>{" "}
            <p className="condition">
              Según el RGPD, los usuarios tienen los siguientes derechos como
              interesados:
              <ul>
                <li>permiso de acceso</li>
                <li>derecho de rectificación</li>
                <li>derecho a borrar</li>
                <li>derecho a restringir el procesamiento</li>
                <li>derecho a la portabilidad de datos</li>
                <li>derecho a oponerse</li>
              </ul>
              Encontrará más información sobre estos derechos en el Capítulo 3
              (art. 12-23) del RGPD.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              Cómo modificar, eliminar o impugnar los datos recopilados
            </p>{" "}
            <p className="condition">
              Si desea que su información sea eliminada o modificada,
              comuníquese con nuestro Oficial de Privacidad aquí:
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              Enmiendas
            </p>{" "}
            <p className="condition">
              Esta Política de privacidad puede modificarse de vez en cuando
              para mantener el cumplimiento de la ley y para reflejar cualquier
              cambio en nuestro proceso de recopilación de datos. Recomendamos
              que nuestros usuarios revisen nuestra política de vez en cuando
              para asegurarse de que estén al tanto de cualquier actualización.
              Si es necesario, podemos notificar a los usuarios por correo
              electrónico sobre los cambios en esta política.
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              Contactar
            </p>{" "}
            <p className="condition">
              Si tiene alguna pregunta para nosotros, no dude en ponerse en
              contacto con nosotros a través de la siguiente dirección:
              admin@4brn.com
            </p>
            <p style={{ textDecoration: "underline" }} className="condition">
              <i>Fecha de vigencia: 2 de agosto de 2021.</i>
            </p>{" "}
          </>
        )}
      </MainContainer>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {
    user: store.user,
    lang: store.lang,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Condition);
