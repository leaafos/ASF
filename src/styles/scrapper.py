from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
from bs4 import BeautifulSoup

# Configurer le WebDriver (ex: pour Chrome)
driver_path = 'path/to/chromedriver'  # Remplacez par le chemin vers votre ChromeDriver
driver = webdriver.Chrome(driver_path)

def search_google_maps(query):
    # Ouvrir Google Maps
    driver.get('https://www.google.com/maps')

    # Trouver la barre de recherche et entrer la requête
    search_box = driver.find_element(By.ID, 'searchboxinput')
    search_box.send_keys(query)
    search_box.send_keys(Keys.RETURN)
    time.sleep(5)  # Attendre le chargement des résultats

def get_agency_details():
    page_content = driver.page_source
    soup = BeautifulSoup(page_content, 'html.parser')

    agencies = []
    for result in soup.find_all('div', class_='section-result-content'):
        name = result.find('h3', class_='section-result-title').text
        details = result.find_all('span', class_='section-result-info')
        for detail in details:
            if 'email' in detail.text.lower():
                email = detail.text
                agencies.append({'name': name, 'email': email})

    return agencies

def main():
    query = 'agences immobilières indépendantes'
    search_google_maps(query)
    agencies = get_agency_details()
    for agency in agencies:
        print(f"Nom: {agency['name']}, Email: {agency['email']}")

if __name__ == '__main__':
    main()

# Fermer le WebDriver après utilisation
driver.quit()
