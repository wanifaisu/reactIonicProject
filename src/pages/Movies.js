import { IonButton, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonPage, IonToolbar } from '@ionic/react';
import styles from './Movies.module.scss';

//	Algolia imports
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';

//	Custom Algolia UI
import CustomSearchbox from '../components/CustomSearchbox';
import CustomInfiniteHits from '../components/CustomInfiniteHits';
import { useEffect } from 'react';
import { addOutline } from 'ionicons/icons';

const searchClient = algoliasearch('QZKBD6VPU7', 'db21b77f5f3bf4d4cbde385b7f33c60d');

const Movies = props => {

	

	
	return (
		<IonPage className={ styles.page }>

			<InstantSearch searchClient={ searchClient } indexName="dev_movies">
				<IonHeader>
					<IonToolbar>
						<div className={ styles.searchContainer }>							
							<IonCardTitle>Movie List</IonCardTitle>
							<IonCardSubtitle>with new search</IonCardSubtitle>
							<CustomSearchbox />

						
						</div>
					</IonToolbar>
				</IonHeader>

				<IonContent fullscreen>						
					<CustomInfiniteHits />
				</IonContent>
			</InstantSearch>
		</IonPage>
	);
};

export default Movies;