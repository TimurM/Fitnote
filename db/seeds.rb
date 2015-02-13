charlie = User.find_or_create_by(email: "charlie@gmail.com", username: "Charlie", password_digest: "$2a$10$Ah4nfSE2tBKByDknITCKuO1D4PYW8JM7qtA/kOhYvoHgfV.Qhrg7O", session_token: "Qw3Eh36QSqa7NDwSi5DaIQ")

notebook10 = Notebook.find_or_create_by(name: "Leg Exercises", owner_id: charlie.id )
notebook11 = Notebook.find_or_create_by(name: "Chest Exercises", owner_id: charlie.id )
notebook9 = Notebook.find_or_create_by(name: "First Notebook", owner_id: charlie.id)


note22 = Note.find_or_create_by(notebook_id: notebook10.id, title: "Bench Jump Guide", body: "1. Begin with a box or bench 1-2 feet in front of you. Stand with your feet shoulder width apart. This will be your starting position.\r\n\r\n2. Perform a short squat in preparation for the jump; swing your arms behind you.\r\n\r\n3. Rebound out of this position, extending through the hips, knees, and ankles to jump as high as possible. Swing your arms forward and up.\r\n\r\n4. Jump over the bench, landing with the knees bent, absorbing the impact through the legs.\r\n\r\n5. Turn around and face the opposite direction, then jump back over the bench.")
note18 = Note.find_or_create_by(notebook_id: notebook10.id, title: "Barbell Full Squat Guide", body: "1. This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack just above shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.\r\n\r\n2. Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.\r\n\r\n3. Step away from the rack and position your legs using a shoulder-width medium stance with the toes slightly pointed out. Keep your head up at all times and maintain a straight back. This will be your starting position.\r\n\r\n4. Begin to slowly lower the bar by bending the knees and sitting back with your hips as you maintain a straight posture with the head up. Continue down until your hamstrings are on your calves. Inhale as you perform this portion of the movement.\r\n\r\n5. Begin to raise the bar as you exhale by pushing the floor with the heel or middle of your foot as you straighten the legs and extend the hips to go back to the starting position.\r\nRepeat for the recommended amount of repetitions.\r\n\r\n6.This type of squat allows a greater range of motion, and allows the trunk to maintain a more vertical position than other types of squats, due to foot position and the higher bar position.")
note19 = Note.find_or_create_by(notebook_id: notebook10.id, title: "Alternate Leg Diagonal Bound Guide", body: "1. Assume a comfortable stance with one foot slightly in front of the other.\r\n\r\n2. Begin by pushing off with the front leg, driving the opposite knee forward and as high as possible before landing. Attempt to cover as much distance to each side with each bound.\r\n\r\n3. It may help to use a line on the ground to guage distance from side to side.\r\n\r\n4. Repeat the sequence with the other leg.")
note21 = Note.find_or_create_by(notebook_id: notebook10.id, title: "Barbell Step Ups Guide", body: "1. Stand up straight while holding a barbell placed on the back of your shoulders (slightly below the neck) and stand upright behind an elevated platform (such as the one used for spotting behind a flat bench). This is your starting position.\r\n\r\n2. Place the right foot on the elevated platform. Step on the platform by extending the hip and the knee of your right leg. Use the heel mainly to lift the rest of your body up and place the foot of the left leg on the platform as well. Breathe out as you execute the force required to come up.\r\n\r\n3. Step down with the left leg by flexing the hip and knee of the right leg as you inhale. Return to the original standing position by placing the right foot of to next to the left foot on the initial position.\r\n\r\n4. Repeat with the right leg for the recommended amount of repetitions and then perform with the left leg.")
note23 = Note.find_or_create_by(notebook_id: notebook10.id, title: "Bear Crawl Sled Drags Guide", body: "1. Wearing either a harness or a loose weight belt, attach the chain to the back so that you will be facing away from the sled. Bend down so that your hands are on the ground. Your back should be flat and knees bent. This is your starting position.\r\n\r\n2. Begin by driving with legs, alternating left and right. Use your hands to maintain balance and to help pull. Try to keep your back flat as you move over a given distance.")
note24 = Note.find_or_create_by(notebook_id: notebook11.id, title: "Alternating Floor Press Guide", body: "1. Lie on the floor with two kettlebells next to your shoulders.\r\n\r\n2. Position one in place on your chest and then the other, gripping the kettlebells on the handle with the palms facing forward.\r\n\r\n3. Extend both arms, so that the kettlebells are being held above your chest. Lower one kettlebell, bringing it to your chest and turn the wrist in the direction of the locked out kettlebell.\r\n\r\n4. Raise the kettlebell and repeat on the opposite side.")
note25 = Note.find_or_create_by(notebook_id: notebook11.id, title: "Barbell Bench Press Guide", body: "1. Lie back on a flat bench. Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.\r\n\r\n2. From the starting position, breathe in and begin coming down slowly until the bar touches your middle chest.\r\n\r\n3. After a brief pause, push the bar back to the starting position as you breathe out. Focus on pushing the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position at the top of the motion, hold for a second and then start coming down slowly again. Tip: Ideally, lowering the weight should take about twice as long as raising it.\r\n\r\n4. Repeat the movement for the prescribed amount of repetitions.\r\n\r\n5. When you are done, place the bar back in the rack.")
note26 = Note.find_or_create_by(notebook_id: notebook11.id, title: "Barbell Guillotine Bench Press Guide", body: "1. Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over your neck with your arms locked. This will be your starting position.\r\n\r\n2. As you breathe in, bring the bar down slowly until it is about 1 inch from your neck.\r\n\r\n3. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. It should take at least twice as long to go down than to come up.\r\n\r\n4. Repeat the movement for the prescribed amount of repetitions.\r\n\r\n5. When you are done, place the bar back in the rack.")
note30 = Note.find_or_create_by(notebook_id: notebook9.id, title: "Bodyweight Flyes Guide", body: "1. Position two equally loaded EZ bars on the ground next to each other. Ensure they are able to roll.\r\n\r\n2. Assume a push-up position over the bars, supporting your weight on your toes and hands with your arms extended and body straight.\r\n\r\n3. Place your hands on the bars. This will be your starting position.\r\n\r\n4. Using a slow and controlled motion, move your hands away from the midline of your body, rolling the bars apart. Inhale during this portion of the motion.\r\n\r\n5. After moving the bars as far apart as you can, return to the starting position by pulling them back together. Exhale as you perform this movement.")
note32 = Note.find_or_create_by(notebook_id: notebook9.id, title: "Cable Iron Cross Guide", body: "\"1. Begin by moving the pulleys to the high position, select the resistance to be used, and take a handle in each hand.\r\n\r\n2. Stand directly between both pulleys with your arms extended out to your sides. Your head and chest should be up while your arms form a “T”. This will be your starting position.\r\n\r\n3. Keeping the elbows extended, pull your arms straight to your sides.\r\n\r\n4. Return your arms back to the starting position after a pause at the peak contraction.\r\n\r\n5.Continue the movement for the prescribed number of repetitions.\"")
note27 = Note.find_or_create_by(notebook_id: notebook11.id, title: "Bent-Arm Dumbbell Guide", body: "1. Place a dumbbell standing up on a flat bench.\r\n\r\n2. Ensuring that the dumbbell stays securely placed at the top of the bench, lie perpendicular to the bench (torso across it as in forming a cross) with only your shoulders lying on the surface. Hips should be below the bench and legs bent with feet firmly on the floor. The head will be off the bench as well.\r\n\r\n3. Grasp the dumbbell with both hands and hold it straight over your chest with a bend in your arms. Both palms should be pressing against the underside one of the sides of the dumbbell. This will be your starting position. Caution: Always ensure that the dumbbell used for this exercise is secure. Using a dumbbell with loose plates can result in the dumbbell falling apart and falling on your face.\r\n\r\n4. While keeping your arms locked in the bent arm position, lower the weight slowly in an arc behind your head while breathing in until you feel a stretch on the chest.\r\n\r\n5. At that point, bring the dumbbell back to the starting position using the arc through which the weight was lowered and exhale as you perform this movement.\r\n\r\n6. Hold the weight on the initial position for a second and repeat the motion for the prescribed number of repetitions.")
note28 = Note.find_or_create_by(notebook_id: notebook11.id, title: "Butterfly Guide", body: "1. Sit on the machine with your back flat on the pad.\r\n\r\n2. Take hold of the handles. Tip: Your upper arms should be positioned parallel to the floor; adjust the machine accordingly. This will be your \r\nstarting position.\r\n\r\n3. Push the handles together slowly as you squeeze your chest in the middle. Breathe out during this part of the motion and hold the contraction for a second.\r\n\r\n4. Return back to the starting position slowly as you inhale until your chest muscles are fully stretched.\r\n\r\n5. Repeat for the recommended amount of repetitions.")
note29 = Note.find_or_create_by(notebook_id: notebook9.id, title: "Cable Chest Press Guide", body: "1. Adjust the weight to an appropriate amount and be seated, grasping the handles. Your upper arms should be about 45 degrees to the body, with your head and chest up. The elbows should be bent to about 90 degrees. This will be your starting position.\r\n\r\n2. Begin by extending through the elbow, pressing the handles together straight in front of you. Keep your shoulder blades retracted as you execute the movement.\r\n\r\n3. After pausing at full extension, return to th starting position, keeping tension on the cables.\r\n\r\n4. You can also execute this movement with your back off the pad, at an incline or decline, or alternate hands.")
note31 = Note.find_or_create_by(notebook_id: notebook9.id, title: "Chain Press Guide", body: "1. Begin by connecting the chains to the cable handle attachments. Position yourself on the flat bench in the same position as for a dumbbell press. Your wrists should be pronated and arms perpendicular to the floor. This will be your starting position.\r\n\r\n2. Lower the chains by flexing the elbows, unloading some of the chain onto the floor.\r\n\r\n3. Continue until your elbow forms a 90 degree angle, and then reverse the motion by extending through the elbow to lockout.")
note33 = Note.find_or_create_by(notebook_id: notebook9.id, title: "Barbell Incline Bench Press Guide", body: "1. Lie back on an incline bench. Using a medium-width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.\r\n\r\n2. As you breathe in, come down slowly until you feel the bar on you upper chest.\r\n\r\n3. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms in the contracted position, squeeze your chest, hold for a second and then start coming down slowly again. Tip: it should take at least twice as long to go down than to come up.\r\n\r\n4. Repeat the movement for the prescribed amount of repetitions.\r\n\r\n5. When you are done, place the bar back in the rack.")



tag9 = Tag.find_or_create_by(name: "squat", user_id: charlie.id)
tag10 = Tag.find_or_create_by(name: "barbell squat", user_id: charlie.id)
tag11 = Tag.find_or_create_by(name: "Legs", user_id: charlie.id)
tag12 = Tag.find_or_create_by(name: "Diagonal Leg workout", user_id: charlie.id)
tag14 = Tag.find_or_create_by(name: "Step ups", user_id: charlie.id)
tag15 = Tag.find_or_create_by(name: "barbell", user_id: charlie.id)
tag16 = Tag.find_or_create_by(name: "bench jump", user_id: charlie.id)
tag18 = Tag.find_or_create_by(name: "chest", user_id: charlie.id)
tag20 = Tag.find_or_create_by(name: "tricep", user_id: charlie.id)
tag21 = Tag.find_or_create_by(name: "bench", user_id: charlie.id)
tag22 = Tag.find_or_create_by(name: "butterfly", user_id: charlie.id)
tag23 = Tag.find_or_create_by(name: "chain press", user_id: charlie.id)
tag24 = Tag.find_or_create_by(name: "Cable cross", user_id: charlie.id)

Tagging.create!([
  {note_id: note18.id, tag_id: tag9.id},
  {note_id: note18.id, tag_id: tag10.id},
  {note_id: note19.id, tag_id: tag11.id},
  {note_id: note19.id, tag_id: tag12.id},
  {note_id: note21.id, tag_id: tag14.id},
  {note_id: note21.id, tag_id: tag15.id},
  {note_id: note21.id, tag_id: tag11.id},
  {note_id: note22.id, tag_id: tag11.id},
  {note_id: note22.id, tag_id: tag16.id},
  {note_id: note23.id, tag_id: tag11.id},
  {note_id: note24.id, tag_id: tag18.id},
  {note_id: note24.id, tag_id: tag20.id},
  {note_id: note25.id, tag_id: tag18.id},
  {note_id: note25.id, tag_id: tag21.id},
  {note_id: note26.id, tag_id: tag21.id},
  {note_id: note26.id, tag_id: tag18.id},
  {note_id: note26.id, tag_id: tag15.id},
  {note_id: note27.id, tag_id: tag18.id},
  {note_id: note28.id, tag_id: tag18.id},
  {note_id: note28.id, tag_id: tag22.id},
  {note_id: note29.id, tag_id: tag18.id},
  {note_id: note30.id, tag_id: tag18.id},
  {note_id: note31.id, tag_id: tag18.id},
  {note_id: note31.id, tag_id: tag23.id},
  {note_id: note32.id, tag_id: tag18.id},
  {note_id: note32.id, tag_id: tag24.id},
  {note_id: note33.id, tag_id: tag18.id},
  {note_id: note33.id, tag_id: tag15.id}
])
