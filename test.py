from datetime import *

date = datetime.strptime('3 May 2020', '%d %b %Y').replace(hour=11, minute=59)
date1 = datetime.strptime('3 May 2020', '%d %b %Y').replace(hour=16, minute=48)
now = datetime.now().hour
if(date1.time().hour == now):
    print ('test')