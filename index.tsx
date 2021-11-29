import React from 'react';
import { CookieWrapper, CookieHeadline, CookieBody, CookieRow, CookieButton, CookieCustomise, CookieCheckbox, CookieFormGroup } from './styles';
import { getCookie, setCookie } from './helper';

export interface CookieProps {
    onAcceptPreferences?: () => void;
    onAcceptStatistics?: () => void;
    onAcceptMarketing?: () => void;
    onAccept?: () => void;
    /**
     * Direction
     */
    cookieDirection: Direction;
    /**
     * Background Color
     */
    backgroundColor?: string;
    cookieMessage: string;
    cookieHeadline: string;
    cookieAcceptButtonText?: string;
    cookieCustomiseButtonText?: string;
    cookieSelectedAcceptButtonText?: string;
    necessaryText?: string;
    preferencesText?: string;
    statisticsText?: string;
    marketingText?: string;
    necessaryDescription?: string;
    preferencesDescription?: string;
    statisticsDescription?: string;
    marketingDescription?: string;
    policyLink?: string;
    policyLinkText?: string;
    setPreferencesOption?:boolean;
    setMarketingOption?:boolean;
    setStatisticsOption?:boolean;
}
export type Direction = 'Top' | 'Bottom' | 'Center';

const CookieLaw: React.FC<CookieProps> = ({
    cookieDirection = "Bottom",
    backgroundColor,
    cookieMessage,
    cookieHeadline,
    cookieAcceptButtonText = "Accept Cookies",
    cookieCustomiseButtonText = "Customise Cookies",
    cookieSelectedAcceptButtonText = "Accept selected cookies",
    policyLink,
    policyLinkText = "Policy data",
    necessaryText = "Necessary",
    preferencesText = "Preferences",
    statisticsText = "Statistics",
    marketingText = "Marketing",
    necessaryDescription = "",
    preferencesDescription = "",
    statisticsDescription = "",
    marketingDescription = "",
    onAcceptPreferences,
    onAcceptStatistics,
    onAcceptMarketing,
    onAccept,
    setPreferencesOption = true,
    setMarketingOption = true,
    setStatisticsOption = true
}): React.ReactElement<CookieProps> => {

    // React States
    const ref = React.useRef<HTMLDivElement>(null);
    const [show, setShow] = React.useState<boolean>(true);
    const [customise, setCustomise] = React.useState<boolean>(false);
    const [preferences, setPreferences] = React.useState<boolean>(false);
    const [statistics, setStatistics] = React.useState<boolean>(false);
    const [marketing, setMarketing] = React.useState<boolean>(false);

    // FUNCTIONS
    // read defaults
    React.useEffect(() => {
        const cookie = getCookie("cookie-law");
        if (cookie) {
            setShow(false);
            onAccept();
            const SelectedCookies = JSON.parse(cookie);
            if (SelectedCookies.preferences === true) {
                onAcceptPreferences();
            }
            if (SelectedCookies.statistics === true) {
                onAcceptStatistics();
            }
            if (SelectedCookies.marketing === true) {
                onAcceptMarketing();
            }
        }
        else {
            setShow(true);
        }
    }, []);

    const cookieAccept = () => {
        setShow(false);
        onAccept();
        onAcceptMarketing();
        onAcceptStatistics();
        onAcceptPreferences();
        setCookieConsent(true);
    }

    const cookieCustomise = () => {
        setCustomise(!customise);
    }

    const cookieSelectedAccept = () => {
        if (preferences === true) {
            onAcceptPreferences();
        }
        if (statistics === true) {
            onAcceptStatistics();
        }
        if (marketing === true) {
            onAcceptMarketing();
        }
        setShow(false);
        setCookieConsent(false);

    }

    const setCookieConsent = (all:boolean = false) => {
        if(!all){
        return setCookie("cookie-law", JSON.stringify({ preferences: preferences, statistics: statistics, marketing: marketing }), 30);
        }
        return setCookie("cookie-law", JSON.stringify({ preferences: true, statistics: true, marketing: true }), 30);
    }
    // OUTPUT
    if (show) {
        return (
            <CookieWrapper ref={ref} backgroundColor={backgroundColor} cookieDirection={cookieDirection} fullSize={customise ? true : false} >
                <CookieHeadline>{cookieHeadline}</CookieHeadline>
                <CookieBody>{cookieMessage}</CookieBody>
                {policyLink && <a target="_blank" href={policyLink}>{policyLinkText}</a>}
                {!customise &&
                    <CookieRow>
                        <CookieButton onClick={cookieAccept}>{cookieAcceptButtonText}</CookieButton>
                        <CookieButton onClick={cookieCustomise}>{cookieCustomiseButtonText}</CookieButton>
                    </CookieRow>
                }
                {customise && <CookieCustomise>
                    <CookieRow width="60%">
                        <CookieFormGroup>
                            <label>{necessaryText}</label>
                            <CookieCheckbox onChange={(e) => console.log(e.target.checked)} checked disabled />
                            <p>{necessaryDescription}</p>
                        </CookieFormGroup>
                       {setPreferencesOption && 
                        <CookieFormGroup>
                            <label>{preferencesText}</label>
                            <CookieCheckbox onChange={() => setPreferences(!preferences)} />
                            <p>{preferencesDescription}</p>
                        </CookieFormGroup>
                        }
                        {setStatisticsOption && 
                        <CookieFormGroup>
                            <label>{statisticsText}</label>
                            <CookieCheckbox onChange={() => setStatistics(!statistics)} />
                            <p>{statisticsDescription}</p>
                        </CookieFormGroup>
                        }
                        {setMarketingOption && 
                        <CookieFormGroup>
                            <label>{marketingText}</label>
                            <CookieCheckbox onChange={() => setMarketing(!marketing)} />
                            <p>{marketingDescription}</p>
                        </CookieFormGroup>
                        }
                    </CookieRow>
                    <CookieButton onClick={cookieSelectedAccept}>{cookieSelectedAcceptButtonText}</CookieButton>
                </CookieCustomise>}
            </CookieWrapper>);
    }
    return (<></>);
}

export default CookieLaw;
