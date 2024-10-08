import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";
import ReservationsClient from "./ReservationClient";
const ReservationsPage=async()=>{
   const currentUser= await getCurrentUser();
   if(!currentUser){
       return(
           <ClientOnly>
               <EmptyState
               title="Unauthorized"
               subtitle="Please login"
      
               />
           </ClientOnly>
       )
   }

   const reservations= await getReservations({
       authorId:currentUser.id
   });

   if(reservations.length===0){
       return(
           <ClientOnly>
               <EmptyState
                 title="No reservations found "
                 subtitle="Looks like have no reservations on properties"
               />
           </ClientOnly>
       )
   };

   return(
       <ClientOnly>
           <ReservationsClient
             reservations={reservations}
              currentUser={currentUser}
           />
       </ClientOnly>
   )
}

export default ReservationsPage;