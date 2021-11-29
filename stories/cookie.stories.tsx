import React from 'react'
import { Story, Meta } from '@storybook/react';
import CookieConsent, {CookieProps} from '../index';


export default {
  component: CookieConsent,
  title: 'Components/CookieConsent',
  argTypes: {
    cookieDirection: {
        options: ['Bottom', 'Center', 'Top'],
        control: { type: 'radio' },
    },
  },
} as Meta;

const Template:Story<CookieProps> = (args) => (
<CookieConsent {...args} />
);
export const Cookie = Template.bind({});

Cookie.args = {
    cookieDirection:"Bottom",
    cookieMessage:"Message",
    cookieHeadline:"Headline",
    backgroundColor:"#fff",

}

export const CookieDeutsch = Template.bind({});

CookieDeutsch.args = {
    policyLink:"/Datenschutz/04c2deed30d54678a8e4e11b9c06460b",
    cookieDirection:"Bottom",
    cookieHeadline:"Wählen Sie Ihre Cookie-Einstellungen",
    cookieAcceptButtonText:"Cookies akzeptieren",
    cookieCustomiseButtonText:"Cookie-Einstellungen anpassen",
    necessaryText:"Technisch notwendige Cookies",
    policyLinkText:"Datenschutzerklärung",
    cookieSelectedAcceptButtonText:"ausgewählte Cookies akzeptieren",
    necessaryDescription:"Cookies zur Gewährleistung der Betriebsbereitschaft der website können nicht deaktiviert werden, soweit wir sie verwenden, um unsere Dienste bereitzustellen.",
    preferencesText:"Einstellungen",
    preferencesDescription:"Für Persönliche einstellungen auf der Seite.",
    statisticsText:"Statistiken",
    statisticsDescription:"Wir verwenden Cookies auch, um zu verstehen, wie die Kunden unsere Dienste nutzen, damit wir Verbesserungen vornehmen können. Wir verwenden Cookies beispielsweise zur Durchführung von Recherchen und Diagnosen, um die Inhalte, Produkte und Dienste von Ersatz-filter.de zu verbessern und um die Leistung unserer Dienste zu messen und zu verstehen.",
    marketingDescription:"Um unsere Angebote zu verbessern nutzen wir verschiedene Techniken das Kauferlebnis zu erfassen und Ihnen bessere Angebote anzuzeigen.",
    cookieMessage:"Wir verwenden Cookies und ähnliche Tools, die erforderlich sind, um Ihnen Einkäufe zu ermöglichen, Ihr Einkaufserlebnis zu verbessern und unsere Dienste bereitzustellen. Dies wird auch in unseren Cookie-Bestimmungen beschrieben. Wir verwenden diese Cookies auch, um nachzuvollziehen, wie Kunden unsere Dienste nutzen (z. B. durch Messung der Websiteaufrufe), damit wir Verbesserungen vornehmen können.",
    backgroundColor:"#fff",
}
