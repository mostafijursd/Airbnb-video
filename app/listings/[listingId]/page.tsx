import getCurrentUser from '@/app/actions/getCurrentUser';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import ListingClient from './ListingClient';
import getReservations from '@/app/actions/getReservations';
import getListingById from '@/app/actions/getListingById';
//import getListings from '@/app/actions/getListingById';



 interface IParams{
  listingId?:string;
 }

const ListingPage = async(
  {params}:{params :IParams}
) => {
//const listing=await getListings(params)
   const listing= await getListingById(params);
   const reservations=await getReservations(params);
  const currentUser= await getCurrentUser();
   if(!listing){
    return(
      <ClientOnly>
        <EmptyState/>
      </ClientOnly>
    )
   }
  return (
  
    <ClientOnly>
      <ListingClient
  reservations={reservations}
      listing={listing}
      currentUser={currentUser}
      />
    


    </ClientOnly>

  )
}

export default ListingPage;